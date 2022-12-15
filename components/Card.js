import { useEffect, useState } from "react";
import Image from "next/image";
export default function Card() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    const fetchCardData = async () => {
      const response = await fetch("/api/services");
      const data = await response.json();
      setServices(data);
    };
    fetchCardData();
  }, []);

  return services.map((service) => {
    return (
      <div className="c-card _flow" key={service.id} data-card={service.id}>
        <div className="thumbnail">
          <Image
            src={service.imgSrc}
            width={382}
            height={478}
            alt={service.title}
          />
        </div>
        <div className="content _flow">
          <h4>{service.title}</h4>
          <div className="description">
            <a className="link" href="mailto:inquiries@philosfiq.com">
              Start your {service.title} Project
            </a>
          </div>
        </div>
      </div>
    );
  });
}
