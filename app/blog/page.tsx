import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import BlogList from "@/components/sections/BlogList";

export const metadata: Metadata = {
  title: "المقالات القانونية",
  description:
    "مقالات قانونية متخصصة من خبراء مكتب السواعد حول التحكيم، القانون التجاري، الأحوال الشخصية، والعقود.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        title="المقالات القانونية"
        subtitle="مقالات ونصائح قانونية متخصصة يقدمها خبراؤنا لإثراء معرفتكم القانونية."
        breadcrumbs={[{ label: "المقالات" }]}
      />
      <BlogList />
    </>
  );
}
