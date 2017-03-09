import {NgModuleFactory} from '@angular/core/index';

import {Disposable} from '../../disposable';
import {RenderOperation, ApplicationStateReader} from '../operation';
import {Route} from '../../route';
import {VariantDefinitions, permutations} from '../../variance';

export abstract class ApplicationBuilderBase<V, M> implements Disposable {
  protected operation: Partial<RenderOperation<M, V>> = {};

  protected abstract getModuleFactory(): Promise<NgModuleFactory<M>>;

  abstract dispose();

  templateDocument(template: string) {
    this.operation.templateDocument = template;
    return this;
  }

  variants(definitions: VariantDefinitions) {
    this.operation.variants = permutations<V>(definitions);
    return this;
  }

  routes(routes: Array<Route>) {
    this.operation.routes = routes;
    return this;
  }

  stateReader(stateReader: ApplicationStateReader) {
    this.operation.stateReader = stateReader;
    return this;
  }
}