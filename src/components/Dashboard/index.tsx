import { Summary } from "../Summary"
import { TransactionTabble } from "../TransactionsTable";
import { Container } from "./styles";

export function Dashboard() {
    return (
        <Container>
            <Summary />
            <TransactionTabble />
        </Container>

    );
}