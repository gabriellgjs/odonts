export interface UserPayload {
  sub: string;
  email: string;
  funcionarioId: string;
  iat?: number;
  exp?: number;
}
