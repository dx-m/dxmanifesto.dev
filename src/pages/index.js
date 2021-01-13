/** @jsx jsx */
import * as React from 'react'
import L from 'lodash'
import { jsx, Box, Flex, Heading, Text, Link } from 'theme-ui'
import workstation from '../images/workstation.svg'
import bp from '../images/bp.svg'
import standard from '../images/standards.svg'
import discuss from '../images/discuss.svg'

import {
  Logo,
  Person,
  Value,
  Section,
  Row,
  Col,
  ManifestoItem,
  Button,
} from '../components'
import Layout from './layout'

import manifesto from '../../manifesto.yaml'
import groups from '../../people.yaml'
import companies from '../../companies.yaml'

const showCompanies = false

const menu = [
  { title: 'Manifesto', href: '#manifesto' },
  { title: 'People', href: '#people' },
  { title: 'Github', href: 'https://github.com/dx-m/dx-manifesto' },
]
const values = [
  {
    title: 'Best practices',
    description: 'That you should know while building developer tools',
    image: bp,
  },
  {
    title: 'A convenient standard',
    description: 'That you can apply for your developer productivity teams',
    image: standard,
  },
  {
    title: 'Encourage discussion',
    description: 'For continous improvement and focus on applied productivity',
    image: discuss,
  },
]

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Section sx={{ my: '32px' }}>
        <Flex>
          <Box sx={{ flex: 1 }}>
            <Logo />
          </Box>
          <Flex sx={{ alignItems: 'center' }}>
            {menu.map(({ title, href }) => (
              <Link sx={{ ml: '24px' }} variant="nav" href={href}>
                {title}
              </Link>
            ))}
          </Flex>
        </Flex>
      </Section>
      <Section sx={{ my: '128px' }}>
        <Row>
          <Col sx={{ pr: '32px', pt: '32px' }}>
            <Heading variant="headingLarge">
              The Developer Experience Manifesto
            </Heading>
            <Text variant="bodyLarge">
              How to build amazing tools, that are productive, empowering,
              simple, and make developers happy.
            </Text>
            <Box sx={{ mt: '64px' }}>
              <Button
                sx={{ mr: '16px' }}
                as="a"
                href="#manifesto"
                variant="primary"
              >
                The Manifesto
              </Button>
              <Button
                as="a"
                href="https://github.com/dx-m/dxmanifesto.dev"
                variant="secondary"
              >
                Edit on Github
              </Button>
            </Box>
          </Col>
          <Col sx={{ width: ['100%', '50%'] }}>
            <img src={workstation} alt="" />
          </Col>
        </Row>
      </Section>
      {showCompanies && (
        <Section sx={{ my: '128px' }}>
          <Heading sx={{ textAlign: 'center' }} variant="headingSuppressed">
            These companies care about developer experience:
          </Heading>
          <Flex sx={{ justifyContent: 'center' }}>
            {companies.map((c) => (
              <img {...c} alt="" />
            ))}
          </Flex>
        </Section>
      )}
      <Section sx={{ my: '128px' }}>
        <Heading sx={{ textAlign: 'center' }} variant="headingNormal">
          What do I gain by following this manifesto?
        </Heading>
        <Row>
          {values.map((v) => (
            <Col>
              <Value {...v} />
            </Col>
          ))}
        </Row>
      </Section>
      <Section sx={{ my: '128px' }}>
        <Heading sx={{ textAlign: 'center' }} variant="headingNormal">
          <Link href="#people" sx={{ color: 'text' }} name="people">
            Who is behind this manifesto?
          </Link>
        </Heading>
        {groups.map((people) => (
          <Row>
            {people.map((p, i) => (
              <Col
                sx={{
                  px: ['8px', null, '24px'],
                  width: ['100%', '50%'],
                  mb: '32px',
                }}
              >
                <Person {...p} />
              </Col>
            ))}
          </Row>
        ))}
      </Section>
      <Section sx={{ my: '128px' }}>
        <Heading sx={{ textAlign: 'center' }} variant="headingLarge">
          <Link sx={{ color: 'text' }} href="#manifesto" name="manifesto">
            The Deveoper Experience Manifesto
          </Link>
        </Heading>
        {L.chunk(manifesto, 2).map((pair) => (
          <Row>
            {pair.map((item) => (
              <Col sx={{ px: ['8px', null, '24px'] }}>
                <ManifestoItem {...item} sx={{ mb: '48px' }} />
              </Col>
            ))}
          </Row>
        ))}
      </Section>
      <Box sx={{ background: 'footer', color: 'inverse', py: '64px' }}>
        <Section>
          <Row>
            <Col
              sx={{
                width: ['100%', null, '50%'],
                px: '16px',
                mb: '32px',
                alignItems: ['center', null, 'flex-end'],
              }}
              size={6}
            >
              <Logo color="white" />
            </Col>
            <Col
              sx={{
                width: ['100%', null, '50%'],
                alignItems: ['center', null, 'flex-start'],
                px: '16px',
              }}
              size={6}
            >
              <Flex sx={{ flexDirection: 'column' }}>
                {menu.map(({ title, href }) => (
                  <Box sx={{ mb: '16px' }}>
                    <Link variant="footer" href={href}>
                      {title}
                    </Link>
                  </Box>
                ))}
              </Flex>
            </Col>
          </Row>
        </Section>
      </Box>
    </Layout>
  )
}

export default IndexPage
