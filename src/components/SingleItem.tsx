import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";

interface SingleItemProps {
	id: number;
	name: string;
	price: number;
	imgUrl: string;
}

const SingleItem = ({ id, name, price, imgUrl }: SingleItemProps) => {
	const quantity = 1;
	return (
		<Card>
			<Card.Img
				variant="top"
				src={imgUrl}
				height="200px"
				style={{
					objectFit: "cover",
				}}
			/>
			<Card.Body className="d-flex flex-column">
				<Card.Title className="d-flex justify-content-between align-items-baseline">
					<span className="fs-2">{name}</span>
					<span className="ms-2 text-muted">{formatCurrency(price)}</span>
				</Card.Title>
				<div className="mt-auto">
					{quantity === 0 ? (
						<Button className="w-100">+ Add To Cart</Button>
					) : (
						<div
							className="d-flex flex-column align-items-center"
							style={{
								gap: ".5rem",
							}}
						>
							<div
								className="d-flex justify-content-center align-items-center"
								style={{
									gap: ".5rem",
								}}
							>
								<Button size="sm">+</Button>
								<div>
									<span className="fs-3">1</span> in cart
								</div>
								<Button size="sm">-</Button>
							</div>
							<Button variant="danger" size="sm">
								Remove
							</Button>
						</div>
					)}
				</div>
			</Card.Body>
		</Card>
	);
};

export default SingleItem;
