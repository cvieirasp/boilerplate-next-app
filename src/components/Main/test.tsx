import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('Should render the heading', () => {
    // Renderiza o componente
    const { container } = render(<Main />)
    // Busca o elemento e verifica a sua existência
    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()
    // Gera snapshot
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    // Renderiza o componente
    const { container } = render(<Main />)
    // Verifica se o background-color está correto
    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
