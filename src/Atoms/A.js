
import styled, {css} from 'styled-components'
import {Link} from '@reach/router'

import {themeValue} from 'theme'

const aCss = css`
  color: ${themeValue('colors.primary.base')};
  text-decoration: none;

  &:hover {
    color: ${themeValue('colors.primary.interaction')};
  }
`

export const A = styled(Link)`
  ${aCss}
`

export const ExternalA = styled.a`
  ${aCss}
`
