import {
    App,
    AppContent,
    AppHeader,
    AppSidebar,
    AppWrapper
} from '@/components/app';

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <App>
            <AppHeader></AppHeader>
            <AppWrapper>
                <AppSidebar>sidebar</AppSidebar>
                <AppContent>{children}</AppContent>
            </AppWrapper>
        </App>
    );
};

export default BaseLayout;
