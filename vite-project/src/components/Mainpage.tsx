// Mainpage.tsx
import { useEffect, useState } from "react";
import { IResult } from "../interfaces/IArticle";
import { Col, Container, Row } from "react-bootstrap";
import SingleArticle from "./SingleArticle";

const Mainpage = () => {
    const [articles, setArticles] = useState<IResult[]>([]);
    const [isLoading, setLoading] = useState<boolean>(true);

    const fetchArticles = async () => {
        try {
            const resp = await fetch("https://api.spaceflightnewsapi.net/v4/articles");
            if (resp.ok) {
                const data = await resp.json();
                setArticles(data.results);
            } else {
                throw new Error("Errore nel recupero degli articoli");
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchArticles();
    }, []);
    console.log("articles:", articles); 

    return (
        <Container>
            <Row className="justify-content-center">
                <Col xs={12} md={6} className="text-center">
                    <h2>Ultimi Articoli</h2>
                </Col>
            </Row>
            <Row className="justify-content-center">
                {isLoading ? (
                    <p>Caricamento...</p>
                ) : (
                    articles.map(article => (
                        <SingleArticle article={article} key={article.id} />
                    ))
                )}
            </Row>
        </Container>
    );
};

export default Mainpage;
