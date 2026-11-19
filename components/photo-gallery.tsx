import Image from "next/image";
import type { GalleryPhoto } from "@/data/site-content";

/**
 * Bento-style photo grid. The first photo is shown large; the rest fill
 * the grid around it.
 */
export function PhotoGallery({ photos }: { photos: GalleryPhoto[] }) {
  return (
    <div className="grid auto-rows-[160px] grid-cols-2 gap-3 md:auto-rows-[200px] md:grid-cols-4 md:gap-4">
      {photos.map((photo, index) => (
        <figure
          key={photo.src}
          className={`group relative overflow-hidden rounded-2xl bg-brand-100 ${
            index === 0 ? "col-span-2 row-span-2" : ""
          } ${index === 3 ? "col-span-2" : ""}`}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes={
              index === 0 || index === 3
                ? "(min-width: 768px) 50vw, 100vw"
                : "(min-width: 768px) 25vw, 50vw"
            }
            className="object-cover transition duration-700 group-hover:scale-105"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-brand-950/80 to-transparent px-4 pb-3 pt-10 text-sm font-semibold text-white">
            {photo.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
