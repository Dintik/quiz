import Link from 'next/link'

export default function EmailPage() {
  return (
    <div>
      <div>
        <div>
          <h1>Email</h1>
          <p>Enter your email to get full access</p>
        </div>

        <input type='email' placeholder='Your email' />

        <p>
          By continuing I agree with{' '}
          <Link href={'#privacyPolicy'}>Privacy policy</Link> and{' '}
          <Link href={'#termsOfUse'}>Terms of use</Link>.
        </p>
      </div>

      <Link href={'/result'}>Next</Link>
    </div>
  )
}
