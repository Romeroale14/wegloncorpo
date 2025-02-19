import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: "u5qejljciak9",
    accessToken: "R3JSpwXa7Odk-y6pap7qecGT4K5zIbnmdsuLkU1ETUM",
    host: "preview.contentful.com"
  });
  const getAuthors = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "cms",
        select: "fields"
      });

      const sanitizedEntries = entries.items.map((item) => {
        // Extrae la URL de la imagen
        const Carr1 = item.fields.carr1?.fields?.file?.url
          ? `https:${item.fields.carr1.fields.file.url}`
          : ""; // Asegura que la URL tenga protocolo

        // Extrae la URL de la imagen
        const Carr2 = item.fields.carr2?.fields?.file?.url
          ? `https:${item.fields.carr2.fields.file.url}`
          : ""; // Asegura que la URL tenga protocolo
        // Extrae la URL de la imagen
        const Carr3 = item.fields.carr3?.fields?.file?.url
          ? `https:${item.fields.carr3.fields.file.url}`
          : ""; // Asegura que la URL tenga protocolo
          // Extrae la URL de la imagen
        const Carr4 = item.fields.carr4?.fields?.file?.url
        ? `https:${item.fields.carr4.fields.file.url}`
        : ""; // Asegura que la URL tenga protocolo
        const Carr5 = item.fields.carr5?.fields?.file?.url
        ? `https:${item.fields.carr5.fields.file.url}`
        : ""; // Asegura que la URL tenga protocolo
        const Carr6 = item.fields.carr6?.fields?.file?.url
        ? `https:${item.fields.carr6.fields.file.url}`
        : ""; // Asegura que la URL tenga protocolo
        const Carr7 = item.fields.carr7?.fields?.file?.url
        ? `https:${item.fields.carr7.fields.file.url}`
        : ""; // Asegura que la URL tenga protocolo
        const Carr8 = item.fields.carr8?.fields?.file?.url
        ? `https:${item.fields.carr8.fields.file.url}`
        : ""; // Asegura que la URL tenga protocolo
        const Carr9 = item.fields.carr9?.fields?.file?.url
        ? `https:${item.fields.carr9.fields.file.url}`
        : ""; // Asegura que la URL tenga protocolo
        const Carr10 = item.fields.carr10?.fields?.file?.url
        ? `https:${item.fields.carr10.fields.file.url}`
        : ""; // Asegura que la URL tenga protocolo
        const Carr11 = item.fields.carr11?.fields?.file?.url
        ? `https:${item.fields.carr11.fields.file.url}`
        : ""; // Asegura que la URL tenga protocolo
        const Carr12 = item.fields.carr12?.fields?.file?.url
        ? `https:${item.fields.carr12.fields.file.url}`
        : ""; // Asegura que la URL tenga protocolo
        const Carr13 = item.fields.carr13?.fields?.file?.url
        ? `https:${item.fields.carr13.fields.file.url}`
        : ""; // Asegura que la URL tenga protocolo
        const Carr14 = item.fields.carr14?.fields?.file?.url
        ? `https:${item.fields.carr14.fields.file.url}`
        : ""; // Asegura que la URL tenga protocolo
        const Carr15 = item.fields.carr15?.fields?.file?.url
        ? `https:${item.fields.carr15.fields.file.url}`
        : ""; // Asegura que la URL tenga protocolo
        const Carr16 = item.fields.carr16?.fields?.file?.url
        ? `https:${item.fields.carr16.fields.file.url}`
        : ""; // Asegura que la URL tenga protocolo
        const Carr17 = item.fields.carr17?.fields?.file?.url
        ? `https:${item.fields.carr17.fields.file.url}`
        : ""; // Asegura que la URL tenga protocolo
        const Carr18 = item.fields.car18?.fields?.file?.url
        ? `https:${item.fields.car18.fields.file.url}`
        : ""; // Asegura que la URL tenga protocolo
        const Carr19 = item.fields.carr19?.fields?.file?.url
        ? `https:${item.fields.carr19.fields.file.url}`
        : ""; // Asegura que la URL tenga protocolo
        const Carr20 = item.fields.carr20?.fields?.file?.url
        ? `https:${item.fields.carr20.fields.file.url}`
        : ""; // Asegura que la URL tenga protocolo
        const Carr21 = item.fields.carr21?.fields?.file?.url
        ? `https:${item.fields.carr21.fields.file.url}`
        : ""; // Asegura que la URL tenga protocolo
        const Carr22 = item.fields.car22?.fields?.file?.url
        ? `https:${item.fields.car22.fields.file.url}`
        : ""; // Asegura que la URL tenga protocolo
        const Carr23 = item.fields.carr23?.fields?.file?.url
        ? `https:${item.fields.carr23.fields.file.url}`
        : ""; // Asegura que la URL tenga protocolo
        const Carr24 = item.fields.carr24?.fields?.file?.url
        ? `https:${item.fields.carr24.fields.file.url}`
        : ""; // Asegura que la URL tenga protocolo
        const Carr25 = item.fields.carr25?.fields?.file?.url
        ? `https:${item.fields.carr25.fields.file.url}`
        : ""; // Asegura que la URL 5enga protocolo
        const Carr26 = item.fields.carr26?.fields?.file?.url
        ? `https:${item.fields.carr26.fields.file.url}`
        : ""; // Asegura que la URL tenga protocolo
        const Carr27 = item.fields.carr27?.fields?.file?.url
        ? `https:${item.fields.carr27.fields.file.url}`
        : ""; // Asegura que la URL tenga protocolo
        const Carr28 = item.fields.carr28?.fields?.file?.url
        ? `https:${item.fields.carr28.fields.file.url}`
        : ""; // Asegura que la URL tenga protocolo
        const Carr29 = item.fields.carr29?.fields?.file?.url
        ? `https:${item.fields.carr29.fields.file.url}`
        : ""; // Asegura que la URL tenga protocolo
        const Carr30 = item.fields.carr30?.fields?.file?.url
        ? `https:${item.fields.carr30.fields.file.url}`
        : ""; // Asegura que la URL tenga protocolo





        return {

          
          Carr1: Carr1,
          Carr2: Carr2,
          Carr3: Carr3,
          Carr4: Carr4,
          Carr5: Carr5,
          Carr6: Carr6,
          Carr7: Carr7,
          Carr8: Carr8,
          Carr9: Carr9,
          Carr10: Carr10,
          Carr11: Carr11,
          Carr12: Carr12,
          Carr13: Carr13,
          Carr14: Carr14,
          Carr15: Carr15,
          Carr16: Carr16,
          Carr17: Carr17,
          Carr18: Carr18,
          Carr19: Carr19,
          Carr20: Carr20,
          Carr21: Carr21,
          Carr22: Carr22,
          Carr23: Carr23,
          Carr24: Carr24,
          Carr25: Carr25,
          Carr26: Carr26,
          Carr27: Carr27,
          Carr28: Carr28,
          Carr29: Carr29,
          Carr30: Carr30,


          // videoRep: videoRepUrl,
        };
      });

      console.log("Sanitized entries:", sanitizedEntries); // Depuración final
      return sanitizedEntries;
    } catch (error) {
      console.error(`Error fetching authors: ${error}`);
    }
  };




  return { getAuthors };
};

export default useContentful;