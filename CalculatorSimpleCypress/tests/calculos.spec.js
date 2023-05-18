describe('Calculos', () => {
    it('Teste de soma', () => {
        cy.visit('/')
        cy.get('[value="7"]').click()
        cy.get('[value="+"]').click()
        cy.get('[value="4"]').click()
        cy.get('[value="="]').click()
        cy.get('#tela').should('have.text', '14')
        cy.get(':nth-child(1) > .botaoAcao').click()
    })

    it('Teste de subtração', () => {
        cy.visit('/')
        cy.get('[value="7"]').click()
        cy.get('[value="-"]').click()
        cy.get('[value="1"]').click()
        cy.get('[value="4"]').click()
        cy.get('[value="="]').click()
        cy.get('#tela').should('have.text', '-7')
        cy.get(':nth-child(1) > .botaoAcao').click()
    })

    it('Teste de multiplicação', () => {
        cy.visit('/')
        cy.get('[value="7"]').click()
        cy.get('[value="x"]').click()
        cy.get('[value="7"]').click()
        cy.get('[value="="]').click()
        cy.get('#tela').should('have.text', '49')
        cy.get(':nth-child(1) > .botaoAcao').click()
    })

    it('Teste de divisão', () => {
        cy.visit('/')
        cy.get('[value="6"]').click()
        cy.get('[value="/"]').click()
        cy.get('[value="3"]').click()
        cy.get('[value="="]').click()
        cy.get('#tela').should('have.text', '2')
        cy.get(':nth-child(1) > .botaoAcao').click()
    })
})