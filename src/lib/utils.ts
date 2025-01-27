import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getStripeOAuthLink(
  accountType: 'agency' | 'subaccount',
  state: string,
  clientId: string,
  redirectUri: string
) {
  return `https://connect.stripe.com/oauth/authorize?response_type=code&client_id=${clientId}&scope=read_write&redirect_uri=${redirectUri}${accountType}&state=${state}`
}
