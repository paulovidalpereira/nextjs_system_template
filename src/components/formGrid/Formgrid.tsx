import { FormControl, FormLabel, Grid, GridItem } from '@chakra-ui/react';

export const Formgrid = ({ fields }) => {
    return (
        <Grid templateColumns="repeat(12, 1fr)" gap={4}>
            {fields.map((field) => {
                const { name, label, cols, field: Field, ...rest } = field;
                return (
                    <GridItem colSpan={cols ?? 12} key={name}>
                        <FormControl isInvalid={formErrors?.[name]}>
                            <FormLabel m={0} htmlFor={name}>
                                {label}:
                            </FormLabel>
                            <Field
                                name={name}
                                error={formErrors?.[name]}
                                {...rest}
                                {...formRegister(name)}
                            />
                        </FormControl>
                    </GridItem>
                );
            })}
        </Grid>
    );
};
