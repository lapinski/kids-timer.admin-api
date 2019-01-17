import 'reflect-metadata';
import { Container, inject, interfaces } from 'inversify';
import { autoProvide, provide, fluentProvide } from 'inversify-binding-decorators';

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

export {
    iocContainer,
    autoProvide,
    provide,
    provideSingleton,
    provideNamed,
    inject,
};
