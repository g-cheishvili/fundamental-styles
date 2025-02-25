export default {
    title: 'BTP Experimental Design/Busy Indicator',
    parameters: {
        components: ['fn-busy-indicator']
    }
};

const localStyles = `
<style>
    .docs-story {
        background: white;
        text-align: center;
    }
</style>
`;

export const BusyIndicator = () => `${localStyles}
<div class="docs-fn-container">
    <div class="fn-busy-indicator" aria-hidden="false" aria-label="Loading">
        <div class="fn-busy-indicator--circle-0"></div>
        <div class="fn-busy-indicator--circle-1"></div>
        <div class="fn-busy-indicator--circle-2"></div>
    </div>
</div>
`;
