import Image from "next/image";
import { Partner } from "../types/company.types";
import styles from "./Companies.module.css";

interface PartnerCarouselProps {
  partners: Partner[];
}

export const PartnerCarousel = ({ partners }: PartnerCarouselProps) => {
  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselTrack}>
        {/* First set of partners */}
        {partners.map((partner, index) => (
          <div key={`first-${index}`} className={styles.partnerSlide}>
            <Image
              src={partner.src}
              alt={partner.alt}
              className="max-h-16 w-auto opacity-60 hover:opacity-100 transition-opacity"
              width={120}
              height={64}
            />
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {partners.map((partner, index) => (
          <div key={`second-${index}`} className={styles.partnerSlide}>
            <Image
              src={partner.src}
              alt={partner.alt}
              className="max-h-16 w-auto opacity-60 hover:opacity-100 transition-opacity"
              width={120}
              height={64}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
