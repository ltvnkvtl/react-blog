import { Configuration, DefinePlugin, RuleSetRule } from 'webpack';
import { resolve } from 'path';
import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }: { config: Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        entry: '',
        html: '',
        src: resolve(__dirname, '..', '..', 'src'),
    };
    // eslint-disable-next-line no-param-reassign
    config!.resolve!.modules = [
        paths.src,
        'node_modules',
    ];
    config!.resolve!.extensions!.push('.ts', '.tsx');

    // @ts-ignore
    // eslint-disable-next-line no-param-reassign
    config!.module!.rules = config!.module!.rules!.map((rule: RuleSetRule) => (
        /svg/.test(rule.test as string)
            ? { ...rule, exclude: /\.svg$/i }
            : rule));
    config!.module!.rules!.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });
    config!.module!.rules!.push(buildCssLoader(true));

    config!.plugins!.push(new DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify(''),
    }));

    return config;
};
