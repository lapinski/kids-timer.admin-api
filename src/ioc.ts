import 'reflect-metadata';
import { Container, inject, interfaces } from 'inversify';
import { autoProvide, provide, fluentProvide } from 'inversify-binding-decorators';
import { IUserRepository, RepositoryTypes } from './repositories/types';
import { MemoryUserRepository } from './repositories/mem-user-repository';

const iocContainer = new Container();

const provideNamed = function (
    identifier: string | symbol | interfaces.Newable<any> | interfaces.Abstract<any>,
    name: string,
) {
  return fluentProvide(identifier)
        .whenTargetNamed(name)
        .done();
};

const provideSingleton = function (
    identifier: string | symbol | interfaces.Newable<any> | interfaces.Abstract<any>,
) {
  return fluentProvide(identifier)
        .inSingletonScope()
        .done();
};

iocContainer
  .bind<IUserRepository>(RepositoryTypes.IUserRepository)
  .to(MemoryUserRepository)
  .inSingletonScope();

export {
    iocContainer,
    autoProvide,
    provide,
    provideSingleton,
    provideNamed,
    inject,
};
