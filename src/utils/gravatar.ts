export interface GravatarOptions {
  email: string;
  style?: string;
  size?: number;
  rating?: string;
}
export function gravatar(options: GravatarOptions): string {
  const { email, size = 200, style = "robohash", rating = "x" } = options;

  const hash = email.trim().toLowerCase();
  return `https://gravatar.com/avatar/${hash}?s=${size}&d=${style}&r=x`;
}
