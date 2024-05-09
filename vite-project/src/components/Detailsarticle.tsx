import { useParams } from "react-router-dom";
import { IResult } from "../interfaces/IArticle";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

const Detailsarticle = () => {
    const { dynamicId } = useParams(); 
    const [isLoading, setLoading] = useState<boolean>(true);
    const [articleDetails, setArticleDetails] = useState<IResult>(null); 
    console.log(articleDetails);
    

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const resp = await fetch("https://api.spaceflightnewsapi.net/v4/articles/" + dynamicId); 
                if (resp.ok) {
                    const data = await resp.json();
                    setArticleDetails(data); 
                } else {
                    throw new Error("Errore nel recupero degli articoli");
                }
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchArticle();
    }, [dynamicId]); 

  

    return (
        <Container>
            <h2>Dettagli articolo</h2>
            {articleDetails && (
                <div>
                    <h3>{articleDetails.title}</h3>
                    <img src={articleDetails.image_url} alt="" />
                </div>
            )}
        </Container>
    );
};

export default Detailsarticle;
