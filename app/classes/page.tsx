import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero, SectionHeading } from "@/components/page-hero";
import { ClassCard } from "@/components/class-card";
import { classes } from "@/data/site-data";

export default function ClassesPage() {
  const ongoingClasses = classes.filter((item) => item.status === "ongoing");
  const upcomingClasses = classes.filter((item) => item.status === "upcoming");

  return (
    <main className="min-h-screen">
      <SiteHeader />

      <PageHero
        eyebrow="Class Center"
        title="Ongoing & upcoming classes"
        subtitle="Browse available classes, check the details, and join directly from each class page."
        image="/images/gallery/young-learners-class.jpg"
      />

      <section className="mx-auto max-w-6xl space-y-20 px-5 py-20 md:px-6 md:py-24">
        {[
          { title: "Ongoing now", eyebrow: "Ongoing", items: ongoingClasses },
          { title: "Starting soon", eyebrow: "Upcoming", items: upcomingClasses },
        ].map((group) =>
          group.items.length > 0 ? (
            <div key={group.eyebrow}>
              <SectionHeading eyebrow={group.eyebrow} title={group.title} />
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item) => (
                  <ClassCard key={item.slug} item={item} />
                ))}
              </div>
            </div>
          ) : null,
        )}
      </section>

      <SiteFooter />
    </main>
  );
}
