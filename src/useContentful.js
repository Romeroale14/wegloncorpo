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
           const ItaliaCarr1 = item.fields.italiaCarr1?.fields?.file?.url
            ? `https:${item.fields.italiaCarr1.fields.file.url}`
           : ""; // Asegura que la URL tenga protocolo

         // Extrae la URL de la imagen
         const Carr1 = item.fields.carr1?.fields?.file?.url
         ? `https:${item.fields.carr1.fields.file.url}`
        : ""; // Asegura que la URL tenga protocolo
          
        
   
  
        return {
         
          ItaliaCarr1: ItaliaCarr1,
          Carr1:Carr1,
          
          
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