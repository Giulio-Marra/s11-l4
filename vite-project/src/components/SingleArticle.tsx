// SingleArticle.tsx
import { Link } from 'react-router-dom';
import { IResult } from '../interfaces/IArticle';
import { Button, Card, Col } from 'react-bootstrap';

interface SingleArticleProps {
    article: IResult;
}

const SingleArticle = (props: SingleArticleProps) => {
    return (
        <Col xs={12} md={4} className="text-center">
            <Card>
                <Card.Img variant="top" src={props.article.image_url} />
                <Card.Body>
                    <Card.Title>{props.article.title}</Card.Title>
                    <Card.Text>Ultima modifica:{props.article.published_at}</Card.Text>
                    <Link to={`/article/${props.article.id}`}>
                        <Button>Vai all'articolo</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleArticle;
