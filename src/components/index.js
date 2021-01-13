/** @jsx jsx */
import { jsx, Text, Flex, Box, Heading, Link } from 'theme-ui'

export const Logo = ({ color = 'black' }) => (
  <svg
    width="90"
    height="27"
    viewBox="0 0 90 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.45997 20.6361H9.77197C11.86 20.6361 13.564 20.0121 14.884 18.7641C16.228 17.5161 16.9 15.6801 16.9 13.2561C16.9 10.8081 16.228 8.96007 14.884 7.71208C13.564 6.46408 11.86 5.84008 9.77197 5.84008H6.45997V20.6361ZM9.98797 26.0001H0.771973V0.476074H10.024C13.888 0.476074 16.984 1.62807 19.312 3.93207C21.664 6.23608 22.84 9.34408 22.84 13.2561C22.84 17.1681 21.664 20.2761 19.312 22.5801C16.984 24.8601 13.876 26.0001 9.98797 26.0001Z"
      fill={color}
    />
    <path
      d="M19.9451 26.0001L26.1011 17.0721L24 13C24 13 23.6038 9.5 23.1038 8.10808C23.4438 8.10808 25.9571 8.10808 25.9571 8.10808L29.4851 13.0041L32.6171 8.10808H38.7371L32.5451 16.8561C36.5531 22.5681 38.6891 25.6161 38.9531 26.0001H32.5451L29.2331 20.9601C28.8731 21.5121 28.2971 22.4001 27.5051 23.6241C26.7131 24.8481 26.1971 25.6401 25.9571 26.0001H19.9451Z"
      fill={color}
    />
    <path
      d="M52.936 14.8401V18.7281L40.196 26.028V21.096L47.5 16.8561L40.196 13.0041V8.10808L52.936 14.8401Z"
      fill={color}
    />
    <path d="M68 26.0001H54.64V21.5361H68V26.0001Z" fill={color} />
    <path
      d="M85 8L80 11.2727L75 8L70 12.0909V17.8182L80 26L90 17.8182V12.0909L85 8Z"
      fill={color}
    />
  </svg>
)

export const Section = ({ children, className = undefined }) => (
  <Box
    className={className}
    sx={{ width: '100%', maxWidth: '1140px', margin: '0 auto' }}
  >
    {children}
  </Box>
)
export const Row = ({ children }) => (
  <Flex sx={{ flexDirection: ['column', null, 'row'] }}> {children} </Flex>
)
export const Col = ({ children, className = undefined }) => (
  <Flex sx={{ flexDirection: 'column' }} className={className}>
    {children}
  </Flex>
)
export const Value = ({ title, description, image }) => (
  <Flex
    sx={{
      flexDirection: 'column',
      alignItems: 'center',
      mb: ['64px', null, 0],
    }}
  >
    <Box sx={{ mb: '16px' }}>
      <img src={image} alt="" />
    </Box>
    <Heading variant="headingSmall">{title}</Heading>
    <Text sx={{ textAlign: 'center' }} variant="bodyMedium">
      {description}
    </Text>
  </Flex>
)

export const Person = ({ name, title, quote, photo }) => (
  <Flex sx={{ flexDirection: 'row' }}>
    <Box
      sx={{
        flexShrink: 0,
        mr: '16px',
      }}
    >
      <img
        sx={{
          width: 60,
          height: 60,
          borderRadius: '50%',
          overflow: 'hidden',
        }}
        src={photo}
        alt=""
      />
    </Box>
    <Flex sx={{ flexDirection: 'column' }}>
      <Heading variant="headingSmall" sx={{ mb: 0 }}>
        {name}
      </Heading>
      <Text variant="bodyMedium">{title}</Text>
      {quote && (
        <Box sx={{ mt: '10px', fontStyle: 'italic' }}>&ndash; {quote}</Box>
      )}
    </Flex>
  </Flex>
)

export const ManifestoItem = ({
  index,
  title,
  bullets,
  className = undefined,
}) => (
  <Flex className={className}>
    <Heading
      variant="headingSmall"
      sx={{
        color: `i${index}`,
        pr: '16px',
        mr: '16px',
        flexShrink: 0,
        borderRight: 'weakSeparator',
      }}
    >
      {index}
    </Heading>
    <Flex sx={{ flexDirection: 'column' }}>
      <Text variant="headingSmall">{title}</Text>
      {bullets.map(({ title: bulletTitle, description, references }) => (
        <Flex sx={{ flexDirection: 'column', mb: '24px' }}>
          <Text variant="bodyLarge">{bulletTitle}</Text>
          <Text variant="bodyMedium" sx={{ mt: '8px', color: 'gray' }}>
            {description}
          </Text>
          {references && (
            <Box sx={{ mt: '8px' }}>
              {references.map(({ title: refTitle, href }, i) => (
                <Link sx={{ ml: i === 0 ? 0 : '16px' }} href={href}>
                  {refTitle}
                </Link>
              ))}
            </Box>
          )}
        </Flex>
      ))}
    </Flex>
  </Flex>
)
