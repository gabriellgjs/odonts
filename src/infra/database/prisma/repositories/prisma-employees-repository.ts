import { Injectable } from '@nestjs/common';
import { Employee } from 'src/app/entities/Employee';
import { User } from 'src/app/entities/User';
import { EmployeesRepository } from 'src/app/repositories/employees-repository';
import { PrismaAndressMapper } from '../mappers/prisma-andress-mapper';
import { PrismaEmployeeMapper } from '../mappers/prisma-employee-mapper';
import { PrismaPersonMapper } from '../mappers/prisma-person.mapper';
import { PrismaTelephoneMapper } from '../mappers/prisma-telephone-mapper';
import { PrismaUserMapper } from '../mappers/prisma-user-mapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaEmployeesRepository implements EmployeesRepository {
  constructor(private prismaService: PrismaService) {}

  async create(_employee: Employee): Promise<void> {
    const isAvaibleRole = await this.prismaService.cargos.findFirst({
      where: {
        nome: _employee.role.name,
      },
    });

    if (!isAvaibleRole) {
      throw new Error('Emplooye not register, because role not avaible');
    }

    _employee.role.id = isAvaibleRole.id;

    const person = PrismaPersonMapper.toPrisma(_employee);

    const createdPerson = await this.prismaService.pessoas.create({
      data: person,
    });

    const andress = PrismaAndressMapper.toPrisma(_employee, createdPerson.id);

    await this.prismaService.enderecos.create({
      data: andress,
    });

    const telephone = PrismaTelephoneMapper.toPrisma(
      _employee,
      createdPerson.id,
    );

    await this.prismaService.telefones.create({
      data: telephone,
    });

    const employee = PrismaEmployeeMapper.toPrisma(_employee, createdPerson.id);

    const createdEmployee = await this.prismaService.funcionarios.create({
      data: employee,
    });

    const user = await PrismaUserMapper.toPrisma(_employee, createdEmployee.id);

    await this.prismaService.usuarios.create({
      data: user,
    });
  }
}
