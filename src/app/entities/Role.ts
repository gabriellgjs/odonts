export interface RoleProps {
  id?: string;
  name: string;
}

export class Role {
  private props: RoleProps;

  get name(): string {
    return this.props.name;
  }

  get id(): string {
    return this.props.id;
  }

  set id(id: string) {
    this.props.id = id;
  }

  constructor(props: RoleProps) {
    this.props = {
      ...props,
    };
  }
}
