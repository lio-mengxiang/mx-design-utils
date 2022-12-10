import React from 'react';
import { ConfigProviderProps } from './interface';
export declare const ConfigContext: React.Context<ConfigProviderProps>;
declare function ConfigProvider(baseProps: ConfigProviderProps): JSX.Element;
declare namespace ConfigProvider {
    var ConfigContext: React.Context<ConfigProviderProps>;
    var displayName: string;
}
export default ConfigProvider;
export declare const ConfigConsumer: React.Consumer<ConfigProviderProps>;
export { ConfigProviderProps };
