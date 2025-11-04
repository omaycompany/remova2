from flask import Flask, render_template, request, send_file, session
import pandas as pd
import os
from io import BytesIO

app = Flask(__name__)
app.secret_key = 'your-secret-key-change-this-in-production'
app.config['UPLOAD_FOLDER'] = 'uploads'
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # 16MB max upload size

if not os.path.exists(app.config['UPLOAD_FOLDER']):
    os.makedirs(app.config['UPLOAD_FOLDER'])

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return "No file part", 400
    
    file = request.files['file']
    
    if file.filename == '':
        return "No selected file", 400
    
    if file:
        try:
            # Read the CSV file
            df = pd.read_csv(file)
            
            # Identify duplicates across all columns
            # keep=False marks all occurrences of duplicates as True
            duplicates = df[df.duplicated(keep=False)]
            
            # Store the duplicates DataFrame as CSV string in session
            if not duplicates.empty:
                session['duplicates_csv'] = duplicates.to_csv(index=False)
                session['has_duplicates'] = True
            else:
                session['has_duplicates'] = False
                session['duplicates_csv'] = None
            
            return render_template('results.html',
                                 original_data=df.to_html(classes='table table-striped', index=False),
                                 duplicate_data=duplicates.to_html(classes='table table-striped', index=False) if not duplicates.empty else None,
                                 has_duplicates=not duplicates.empty)
        except Exception as e:
            return f"Error processing file: {e}", 500
    
    return "Something went wrong", 500

@app.route('/download_duplicates', methods=['GET'])
def download_duplicates():
    try:
        # Check if duplicates exist in session
        if not session.get('has_duplicates', False):
            return "No duplicates available to download", 404
        
        # Retrieve the duplicates CSV from session
        duplicates_csv = session.get('duplicates_csv')
        
        if not duplicates_csv:
            return "No duplicates data found", 404
        
        # Convert the CSV string to BytesIO for download
        output = BytesIO()
        output.write(duplicates_csv.encode('utf-8'))
        output.seek(0)
        
        return send_file(
            output,
            mimetype='text/csv',
            as_attachment=True,
            download_name='duplicates.csv'
        )
    except Exception as e:
        return f"Error downloading file: {e}", 500

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=6161, debug=True)



