export class Role {
  private avaibleRoles = ['dentista', 'secretario', 'proprietario'];
  private readonly role: string;

  private validateRole(role: string): boolean {
    return this.avaibleRoles.includes(role);
  }

  get value(): string {
    return this.role;
  }

  constructor(role: string) {
    const isAvaibleRole = this.validateRole(role);

    if (!isAvaibleRole) {
      throw new Error('Role not found available');
    }

    this.role = role;
  }
}
