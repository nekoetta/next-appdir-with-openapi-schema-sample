'use client'

export default function GlobalError(props: {
  error: Error
  reset: () => void
}) {
  console.log('global', props.error)
  return (
    <html lang="js">
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => props.reset()}>Try agein</button>
      </body>
    </html>
  )
}
