describe('Regres CRUD Operations', () => {
    const baseUrl = 'https://reqres.in/api';

    it('should create a new user', () => {
        cy.request('POST', `${baseUrl}/users`, { name: 'omni', job: 'leader' })
            .then((response) => {
                expect(response.status).to.eq(201);
                expect(response.body.name).to.eq('omni');
            });
    });

    it('should update user details', () => {
        cy.request('PUT', `${baseUrl}/users/2`, { name: 'tester', job: 'QA' })
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.job).to.eq('QA');
            });
    });

    it('should delete a user', () => {
        cy.request('DELETE', `${baseUrl}/users/2`).then((response) => {
            expect(response.status).to.eq(204);
        });
    });
});
