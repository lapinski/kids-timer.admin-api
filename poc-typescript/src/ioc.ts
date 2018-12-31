import 'reflect-metadata';
import { Container, inject, interfaces } from 'inversify';
import { autoProvide, provide, fluentProvide } from 'inversify-binding-decorators';
import { Repository } from 'typeorm';
import { createConnection, getRepository } from './database';
import { User } from './entities/user';

const iocContainer = new Container();

const ProvideNamed = function(
    identifier: string | symbol | interfaces.Newable<any> | interfaces.Abstract<any>,
    name: string
) {
    return fluentProvide(identifier)
        .whenTargetNamed(name)
        .done();
};

const ProvideSingleton = function(
    identifier: string | symbol | interfaces.Newable<any> | interfaces.Abstract<any>
) {
    return fluentProvide(identifier)
        .inSingletonScope()
        .done();
};

const Provide = provide;
const Inject = inject;

export {
    iocContainer,
    autoProvide,
    Provide,
    ProvideSingleton,
    ProvideNamed,
    Inject,
};
