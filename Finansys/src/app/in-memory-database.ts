import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDatabase implements InMemoryDbService {
    createDb() {
        const categories = [
            { id: 1, nome: 'Moradia', description: 'Pagamentos de contas de casa'},
            { id: 2, nome: 'Saúde', description: 'PLano de saúde e remédios'},
            { id: 3, nome: 'Lazer', description: 'Cinema, parques etc'}
        ];

        return {categories};
    }
}
