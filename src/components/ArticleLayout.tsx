import SiteLayout from "./SiteLayout";

type ArticleLayoutProps = {
  title: string;
  date?: string;
  children: React.ReactNode;
};

export default function ArticleLayout({ title, date, children }: ArticleLayoutProps) {
  return (
    <SiteLayout>
      <div className="max-w-[1000px] mx-auto px-4 py-12 md:py-16">
        <article className="rounded-2xl bg-white dark:bg-[#161a26] px-6 py-10 md:px-20 md:py-16">
          <h1 className="text-2xl md:text-3xl font-extrabold leading-tight text-writingColor">
            {title}
          </h1>
          {date && <p className="mt-2 text-sm font-medium text-writingColor">{date}</p>}

          <div className="mt-10 text-[17px] leading-[1.75] text-writingColor">
            {children}
          </div>
        </article>
      </div>
    </SiteLayout>
  );
}
