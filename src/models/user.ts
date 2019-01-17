/**
 * @tsoaModel
 */
export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
}

export class UserCreationRequest {
  firstName: string;
  lastName: string;
  email: string;
}
