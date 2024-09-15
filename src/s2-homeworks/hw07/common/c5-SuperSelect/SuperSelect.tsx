import React, {
    SelectHTMLAttributes,
    DetailedHTMLProps,
    ChangeEvent,
    useCallback,
    useMemo,
} from 'react';
import s from './SuperSelect.module.css';
import { Theme } from '../../../hw12/HW12';

type DefaultSelectPropsType = DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
>;

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: Theme[];
    onChangeOption?: (option: number) => void;
};

const SuperSelect: React.FC<SuperSelectPropsType> = React.memo(({
    options,
    className,
    onChangeOption,
    value,
    ...restProps
}) => {
    const mappedOptions: JSX.Element[] | [] = useMemo(() => {
        return options
            ? options.map((o) => (
                <option
                    id={'hw7-option-' + o.id}
                    className={s.option}
                    key={o.id}
                    value={o.id}
                >
                    {o.value}
                </option>
            ))
            : []; // map options with key
    }, [options]); // Include options in dependency array

    const onChangeCallback = useCallback(
        (e: ChangeEvent<HTMLSelectElement>) => {
            if (onChangeOption) {
                onChangeOption(+e.currentTarget.value);
            }
        }
        , [onChangeOption]);

    const finalSelectClassName = s.select + (className ? ' ' + className : '');

    return (
        <select
            value={value}
            className={finalSelectClassName}
            onChange={onChangeCallback}
            {...restProps}
        >
            {mappedOptions}
        </select>
    );
});

export default SuperSelect;