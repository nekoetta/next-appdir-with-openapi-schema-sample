import { render, screen } from '@testing-library/react'
import { LinkButton } from '@/components/buttons/LinkButton'
import '@testing-library/jest-dom'

describe('LinkButton', () => {
  it('renders a link button', () => {
    const { container } = render(
      <LinkButton href="test_link">
        <div>child</div>
      </LinkButton>
    )
    expect(container.getElementsByTagName('a')[0].href).toContain('test_link')
    expect(screen.getByText('child')).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
