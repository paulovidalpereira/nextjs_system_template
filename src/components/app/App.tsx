'use client';

import { Flex, FlexProps } from '@chakra-ui/react';

export const App = ({ children }: FlexProps) => {
    return (
        <Flex h="100%" direction="column">
            {children}
        </Flex>
    );
};

export const AppHeader = ({ children }: FlexProps) => {
    return (
        <Flex
            bg="gray.800"
            h="12"
            // borderBottom={'1px'}
            // borderColor={'gray.200'}
        >
            {children}
        </Flex>
    );
};

export const AppWrapper = ({ children }: FlexProps) => {
    return <Flex flex={'1 1 0%'}>{children}</Flex>;
};

export const AppSidebar = ({ children }: FlexProps) => {
    return (
        <Flex
            bg="gray.100"
            w={'60'}
            borderRight={'1px'}
            borderColor={'gray.200'}
        >
            {children}
        </Flex>
    );
};

export const AppContent = ({ children }: FlexProps) => {
    return <Flex flex={'1 1 0%'}>{children}</Flex>;
};
