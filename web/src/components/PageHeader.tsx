import { ReactNode } from "react";

type Props = {
  title: string;
  subtitle?: string;
  actions?: ReactNode;
};

export default function PageHeader({ title, subtitle, actions }: Props) {
  return (
    <section className="bg-base-200 border-b border-base-300">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
            {subtitle ? (
              <p className="opacity-80 mt-2 max-w-2xl">{subtitle}</p>
            ) : null}
          </div>
          {actions ? <div className="flex gap-2">{actions}</div> : null}
        </div>
      </div>
    </section>
  );
}

