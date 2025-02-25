export default {
    title: 'Components/Illustrated Message',
    parameters: {
        description: `Illustrated messages for SAP Fiori are a simple yet powerful way to engage users and add personality to the experience.

## Structure
**Illustration (optional)** - \`.fd-illustrated-message__illustration\`
Helps clarify the situation. Must always be paired with a message.
To set the Illustration you need to provide a svg.
Generalley, illustration from SAP Fiori Moments library intended to use.

**Message (required)** - \`.fd-illustrated-message__figcaption\`
Consists of:
* title - \`.fd-illustrated-message__title\` - a single line and explains the state.
* text - \`.fd-illustrated-message__text\`- adds details and, where appropriate, tells the user what to do next. It's recommended to fit the text in three lines or less.

**Call to Action (optional but recommended)** - \`.fd-illustrated-message__actions\`
Include a call to action (CTA) button if there is a clear next step.

## Types and sizing
* Scene (default) - The largest illustration type, mainly used in full-screen situations. For small screens (less than 600px) the max size of the illustration is 15rem (width) and 11.25rem (height). For all other screens the max size of the illustration is 20rem (width) and 15rem (height).
* Dialog - \`.fd-illustrated-message--dialog\` medium sized illustrations used in a Dialogs or a Message Box. The illustration size is 10rem.
* Spot - \`.fd-illustrated-message--spot\` the smallest and most simple product illustrations. They can be used in medium-sized cards or UI elements smaller than full screen. The size of the illustration is 8rem.`,
        tags: ['f3', 'a11y', 'theme'],
        components: ['illustrated-message', 'button']
    }
};

const localStyles = `<style>
    :root {
        --sapIllus_BrandColorPrimary: var(--sapContent_Illustrative_Color1);
        --sapIllus_BrandColorSecondary: var(--sapContent_Illustrative_Color2);
        --sapIllus_AccentColor: var(--sapContent_Illustrative_Color3);
        --sapIllus_StrokeDetailColor: var(--sapContent_Illustrative_Color4);
        --sapIllus_Layering1: var(--sapContent_Illustrative_Color5);
        --sapIllus_Layering2: var(--sapContent_Illustrative_Color6);
        --sapIllus_BackgroundColor: var(--sapContent_Illustrative_Color7);
        --sapIllus_ObjectFillColor: var(--sapContent_Illustrative_Color8);
        --sapIllus_NoColor: none;
        --sapIllus_PatternShadow: url(#sapIllus_PatternShadow);
        --sapIllus_PatternHighlight: url(#sapIllus_PatternHighlight);
    }
</style>
`;

export const Scene = () => `<div style="width: 100%; display: flex; justify-content: center">
    <figure class="fd-illustrated-message">
        <svg class="fd-illustrated-message__illustration" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="320" height="240" viewBox="0 0 320 240" id="sapIllus-Scene-NoMail">
            <path class="sapIllus_BackgroundColor" style="fill:var(--sapIllus_BackgroundColor)" d="M160.9349,25c-63.5127,0-117,45.65-117,111.0215,0,57.985,53.4873,102.9785,117,102.9785s115-45.0093,115-102.9944C275.9349,72.6147,224.4477,25,160.9349,25Z"/>
            <path class="sapIllus_ObjectFillColor" style="fill:var(--sapIllus_ObjectFillColor)" d="M154.41,88.5248l1.27-.8982c.083-.0588.1743-.0987.2588-.1543l.3369-.2319-.272.1933a8.7808,8.7808,0,0,1,9.8.18l4.4263,3.0712,68.4668,46.5077c9.1367-6.9,15.7255-11.8942,17.143-12.9688a8.2264,8.2264,0,0,0-2.6469-3.1792L165.47,58.5277a8.2316,8.2316,0,0,0-9.5674.0088L68.3763,121.1752a8.2141,8.2141,0,0,0-2.2954,2.5366c1.9439,1.5221,8.5494,6.6905,17.4517,13.62Z"/>
            <path class="sapIllus_ObjectFillColor" style="fill:var(--sapIllus_ObjectFillColor)" d="M108.8949,228.8754l39.0273-28.21,5.6529-4.1093L65.5863,124.6974a8.2081,8.2081,0,0,0-.6514,3.1721v67.3023A114.4593,114.4593,0,0,0,108.8949,228.8754Z"/>
            <path class="sapIllus_ObjectFillColor" style="fill:var(--sapIllus_ObjectFillColor)" d="M199.6752,219.5612l13.2217,9.5757a111.1492,111.1492,0,0,0,43.75-34.1394v-67.25a8.1879,8.1879,0,0,0-.4126-2.5244l-88.8384,70.9013Z"/>
            <path class="sapIllus_Layering2" style="fill:var(--sapIllus_Layering2)" d="M161.4076,239.8373A127.1611,127.1611,0,0,0,211.7054,229.66l-44.4179-33.449L165.6727,197.5a9.9255,9.9255,0,0,1-4.8164,2.0576v.11c-.2187,0-.436-.04-.6552-.0552-.2183.0151-.4356.0552-.6543.0552v-.11A9.918,9.918,0,0,1,154.73,197.5l-1.0645-.87-43.584,32.758A129.9029,129.9029,0,0,0,161.4076,239.8373Z"/>
            <path class="sapIllus_BrandColorSecondary" style="fill:var(--sapIllus_BrandColorSecondary)" d="M191.9257,105.94,165.16,87.24l5.07,3.4442-4.4263-3.0712a8.7806,8.7806,0,0,0-9.8-.18l-71.3877,50.74c8.7324,6.7949,19.4937,15.1414,30.1729,23.3565q2.7714,2.1324,5.5244,4.2441c13.5654,10.4028,26.395,20.1113,34.0459,25.582a12.7645,12.7645,0,0,0,3.7881,1.2576c.2309.0388.4731.0686.7182.0962a12.788,12.788,0,0,0,7.1792-1.3538c14.8945-10.6494,49.9448-37.0171,71.6738-53.425Z"/>
            <path class="sapIllus_PatternShadow" style="fill:var(--sapIllus_PatternShadow)" d="M114.7885,161.53c1.8476,1.4216,37.7428,28.9382,38.7428,29.2194s1,1.2812,4.6156,1.8643c.2309.0388.0521-.2245.7182.0962s3.6319-.1428,3.6319-.1428a12.786,12.786,0,0,0,3.5473-1.2109c14.8945-10.65,49.9448-37.0171,71.6738-53.4251L191.9257,105.94Q153.3571,133.7349,114.7885,161.53Z"/>
            <path class="sapIllus_StrokeDetailColor" style="fill:var(--sapIllus_StrokeDetailColor)" d="M253.7728,120.23,166.05,57.7133a9.2324,9.2324,0,0,0-10.73.0107L67.7943,120.3627a9.2487,9.2487,0,0,0-3.8594,7.5068v65.9968c.167.2205.3316.4422.5.6614q.2492.3229.5.6441V127.87a8.2081,8.2081,0,0,1,.6514-3.1721l87.9888,71.8586.0151.0125-5.668,4.0969-39.0273,28.21c.0464.02.0938.04.14.06.3472.1533.6978.3023,1.0469.4524l43.584-32.758,1.0644.87a9.9193,9.9193,0,0,0,4.8165,2.0576v.11c.2187,0,.436-.04.6543-.0552.2192.0151.4365.0552.6552.0552v-.11a9.9265,9.9265,0,0,0,4.8164-2.0576l1.6148-1.2891,44.4179,33.449c.3921-.1687.7813-.3413,1.1709-.5137l.0206-.0093-13.2217-9.5756-32.3184-23.4056.0391-.0312,88.8384-70.9014a8.1879,8.1879,0,0,1,.4126,2.5244v67.25c.1689-.2226.333-.448.5-.6718.1679-.2259.3339-.4532.5-.68v-65.898A9.2493,9.2493,0,0,0,253.7728,120.23Zm-15.0761,16.9624L170.23,90.6846,165.16,87.24,191.9257,105.94l45.7924,31.9915c-21.729,16.4079-56.7793,42.7756-71.6738,53.425a12.7821,12.7821,0,0,1-3.5473,1.211,10.993,10.993,0,0,1-3.6319.1428c-.2451-.0276-.4873-.0574-.7182-.0962l-.0522-.0089a12.1683,12.1683,0,0,1-5.0281-2.1773c-7.7549-5.599-19.9253-14.8157-32.7537-24.6534q-2.7474-2.1075-5.5244-4.2441c-10.6792-8.2151-21.44-16.5616-30.1729-23.3565l71.3877-50.74.272-.1933-.3369.2319L154.41,88.5248,83.5326,137.3314c-8.9023-6.9292-15.5078-12.0975-17.4517-13.62a8.2118,8.2118,0,0,1,2.2954-2.5366l87.5264-62.6387a8.2316,8.2316,0,0,1,9.5674-.0088l87.7227,62.5166a8.2257,8.2257,0,0,1,2.6469,3.1792C254.4222,125.2981,247.8334,130.2919,238.6967,137.1923Z"/>
            <path class="sapIllus_Layering2" style="fill:var(--sapIllus_Layering2)" d="M68.3383,196.2021a24.5594,24.5594,0,0,0-.6,3.6006c0,1.2.5,2,1.8994,2,3.6006,0,8.8008-4.6006,8.8008-15.4013,0-16.2012-11.1006-24.9014-26.501-24.9014s-27.7022,12.9014-27.7022,28.8018c0,17.8007,12.4,28.6015,28.6016,28.6015,15.001,0,18.1016-6.6,21.502-6.6a3.9528,3.9528,0,0,1,3.8,3.8994c0,5.4-15.2012,11.7012-25.3018,11.7012-21.6016,0-39.4024-15.6006-39.4024-37.6025C13.4349,168.7,30.8363,152.5,52.2377,152.5c19.1006,0,35.2021,11.9,35.2021,31.002,0,22.7011-19.3017,28.8017-25.3017,28.8017q-5.8506,0-6-5.1006h-.2a13.4712,13.4712,0,0,1-10.4,5.1006c-8.501,0-14.7012-7.7012-14.7012-17.6016,0-13.8007,9.1006-23.9013,19.001-23.9013,6.1006,0,9.501,2,12.4,6.2l.4-1.8c.7-3.1006,3-3.6006,4.8008-3.6006a4.1165,4.1165,0,0,1,4.3994,4.3008,14.5456,14.5456,0,0,1-.3994,2.8994Zm-18.7012,5.3008c5.7,0,9.7012-4.9,9.7012-11.3008,0-5.1005-2.7-8.6005-7.7012-8.6005-5.8,0-10,5.1005-10,11.0009C41.6371,198.3027,45.0375,201.5029,49.6371,201.5029Z"/>
            <path class="sapIllus_StrokeDetailColor" style="fill:var(--sapIllus_StrokeDetailColor)" d="M52.8373,228.4043c-22.7481,0-39.9024-16.3809-39.9024-38.1025C12.9349,168.8242,30.1986,152,52.2377,152c20.687,0,35.7021,13.248,35.7021,31.502,0,22.3574-18.9126,29.3017-25.8017,29.3017-4.5826,0-6.065-2.3262-6.4141-4.6142a13.61,13.61,0,0,1-10.1865,4.6142c-8.666,0-15.2012-7.7822-15.2012-18.1016,0-13.455,8.7481-24.4013,19.501-24.4013,5.5434,0,9.1435,1.6113,12.1523,5.5117l.16-.72c.5986-2.6494,2.3779-3.9922,5.289-3.9922a4.5926,4.5926,0,0,1,4.9,4.8008,15.1516,15.1516,0,0,1-.4107,3.0039l-3.1011,17.4052a22.28,22.28,0,0,0-.5878,3.4922c0,1.0655.4052,1.5,1.3994,1.5,3.4467,0,8.3007-4.623,8.3007-14.9013C77.9388,171.35,67.976,162,51.9379,162c-14.9995,0-27.2022,12.6963-27.2022,28.3018,0,16.8086,11.293,28.1015,28.1016,28.1015,10.0156,0,14.5947-2.95,17.625-4.9033,1.4712-.9473,2.6328-1.6963,3.8769-1.6963a4.4642,4.4642,0,0,1,4.3,4.3994C78.639,221.9775,63.26,228.4043,52.8373,228.4043ZM52.2377,153c-21.4781,0-38.3028,16.3848-38.3028,37.3018,0,21.1523,16.7246,37.1025,38.9024,37.1025,10.4306,0,24.8017-6.49,24.8017-11.2012a3.4387,3.4387,0,0,0-3.3-3.3994c-.95,0-1.95.6445-3.3354,1.5371-3.1284,2.0156-7.8569,5.0625-18.1665,5.0625-17.4068,0-29.1016-11.6953-29.1016-29.1015C23.7357,174.1445,36.3871,161,51.9379,161c16.6548,0,27.0009,9.7334,27.0009,25.4014,0,11.584-5.705,15.9013-9.3007,15.9013a2.2107,2.2107,0,0,1-2.3994-2.5,24.1368,24.1368,0,0,1,.6093-3.6982l3.0987-17.3916a14.6,14.6,0,0,0,.3916-2.8115,3.6225,3.6225,0,0,0-3.9-3.8008c-2.4477,0-3.8183,1.0205-4.3129,3.2109l-.649,2.916-.6508-.9423c-2.9727-4.3067-6.334-5.9844-11.9888-5.9844-10.2017,0-18.501,10.498-18.501,23.4013,0,9.7491,6.105,17.1016,14.2012,17.1016a12.869,12.869,0,0,0,10.021-4.9258l.1494-.1748h.9155l.0147.4854c.0908,3.1054,1.89,4.6152,5.5,4.6152,6.622,0,24.8017-6.707,24.8017-28.3017C86.94,165.8281,72.3456,153,52.2377,153Zm-2.6006,49.0029c-5.1636,0-8.5-3.6894-8.5-9.4,0-6.4492,4.6123-11.5009,10.5-11.5009,5.0586,0,8.2012,3.4873,8.2012,9.1005C59.8383,197.04,55.5482,202.0029,49.6371,202.0029Zm2-19.9013c-5.3272,0-9.5,4.6123-9.5,10.5009,0,5.1036,2.9438,8.4,7.5,8.4,5.3315,0,9.2012-4.542,9.2012-10.8008C58.8383,185.13,56.1464,182.1016,51.6371,182.1016Z"/>
            <path class="sapIllus_Layering1" style="fill:var(--sapIllus_Layering1)" d="M127.1881,21.5913a1.2161,1.2161,0,0,0-1.6672-.4183,1.2153,1.2153,0,0,0-.413,1.6638l10.5738,17.5713a1.1642,1.1642,0,0,0,.1321.1813,1.2124,1.2124,0,0,0,1.948-1.4272Z"/>
            <path class="sapIllus_Layering1" style="fill:var(--sapIllus_Layering1)" d="M163.7653,7a1.2586,1.2586,0,0,0-1.2387,1.2319l-.5914,21.4634a1.3089,1.3089,0,0,0,.3879.9665,1.1664,1.1664,0,0,0,.7824.3377l.0356,0a1.2378,1.2378,0,0,0,1.2031-1.2329l.59-21.463A1.2449,1.2449,0,0,0,163.7653,7Z"/>
            <path class="sapIllus_Layering1" style="fill:var(--sapIllus_Layering1)" d="M200.538,23.3206a1.1638,1.1638,0,0,0-.8642-.3184,1.1766,1.1766,0,0,0-.83.4062L185.2458,38.9322a1.265,1.265,0,0,0-.1431,1.4607l.001.0005a1.2829,1.2829,0,0,0,.2266.2877,1.174,1.174,0,0,0,1.693-.0878l13.5992-15.5244A1.26,1.26,0,0,0,200.538,23.3206Z"/>
            <path class="sapIllus_ObjectFillColor" style="fill:var(--sapIllus_ObjectFillColor)" d="M278.2066,200.7982a3.2452,3.2452,0,0,0,.1472-4.7278l-.1179-.118-5.2452-5.2452-2.6226,2.6226,3.8306,3.8307a1.8545,1.8545,0,0,1-.1029,2.718l-16.0489,13.7851a1.8475,1.8475,0,0,0-.07,2.68h0a1.8477,1.8477,0,0,0,2.5492.0607Z"/>
            <path class="sapIllus_StrokeDetailColor" style="fill:var(--sapIllus_StrokeDetailColor)" d="M259.2853,217.3867a2.3484,2.3484,0,0,1-1.5722-4.0947L273.77,199.5a1.3563,1.3563,0,0,0,.0752-1.9863l-4.1836-4.1836L272.99,190l5.7168,5.7168a3.7461,3.7461,0,0,1-.17,5.4561l-17.6807,15.6064A2.3308,2.3308,0,0,1,259.2853,217.3867Zm11.79-24.0566,3.4765,3.4765a2.3546,2.3546,0,0,1-.13,3.4512L258.3732,214.043a1.3462,1.3462,0,0,0-.0429,1.9463,1.3469,1.3469,0,0,0,1.8593.0449l17.6856-15.6113a2.7445,2.7445,0,0,0,.125-3.9991l-5.01-5.01Z"/>
            <path class="sapIllus_AccentColor" style="fill:var(--sapIllus_AccentColor)" d="M261.06,204.0018a18.8734,18.8734,0,0,1-5.7471-5.499l-1.1436-2.7383-7.9355,8.2285A147.597,147.597,0,0,0,231.615,221.68a34.39,34.39,0,0,1-3.4454,4.0341,2.3562,2.3562,0,0,0,.004,3.3252l1.623,1.6241a2.36,2.36,0,0,0,3.33,0,34.4573,34.4573,0,0,1,4.0664-3.4727,146.9584,146.9584,0,0,0,17.7012-14.6152l7.7587-7.4844Z"/>
            <path class="sapIllus_ObjectFillColor" style="fill:var(--sapIllus_ObjectFillColor)" d="M274.5829,184.262h0a6.0975,6.0975,0,0,0-8.719.0979l-11.788,12.2222.3755.6281a19.164,19.164,0,0,0,8.0081,7.3719h0l12.0255-11.601a6.0976,6.0976,0,0,0,.098-8.7191Z"/>
            <path class="sapIllus_StrokeDetailColor" style="fill:var(--sapIllus_StrokeDetailColor)" d="M262.5544,205.1854l-.3154-.1543a19.6264,19.6264,0,0,1-8.2168-7.5644l-.5713-.9571,12.0527-12.496a6.5485,6.5485,0,0,1,4.6934-2.0372,6.4371,6.4371,0,0,1,4.7392,1.9317h0a6.6,6.6,0,0,1-.1054,9.4346Zm-7.8535-8.5312.18.2988a18.6155,18.6155,0,0,0,7.4873,7.0234l11.77-11.3544a5.5987,5.5987,0,0,0-3.8652-9.6465c-.0215,0-.043,0-.0645.0009a5.55,5.55,0,0,0-3.9834,1.73Z"/>
            <path class="sapIllus_AccentColor" style="fill:var(--sapIllus_AccentColor)" d="M275.8942,178.3146h0a2.296,2.296,0,0,1,2.296,2.296v6.9763a0,0,0,0,1,0,0h-4.592a0,0,0,0,1,0,0v-6.9763A2.296,2.296,0,0,1,275.8942,178.3146Z" transform="translate(210.1732 -141.5016) rotate(45)"/>
            <path class="sapIllus_StrokeDetailColor" style="fill:var(--sapIllus_StrokeDetailColor)" d="M274.5954,188.2069c-.459,0-1.2246-.2676-2.39-1.4316-1.7891-1.7891-1.374-2.9473-1.3213-3.0733a.5.5,0,0,1,.9307.3662c-.0118.0489-.1495.753,1.0976,2,1.2051,1.2061,1.7031,1.1319,1.7041,1.1319a.46.46,0,0,1,.6436.2021.5327.5327,0,0,1-.2246.6983A.8706.8706,0,0,1,274.5954,188.2069Z"/>
            <path class="sapIllus_StrokeDetailColor" style="fill:var(--sapIllus_StrokeDetailColor)" d="M228.1736,229.0389a2.33,2.33,0,0,1-.5024-.7506l-2.6,4.11a1.01,1.01,0,0,0,1.3756,1.3756l4.1136-2.6023a2.3358,2.3358,0,0,1-.7639-.5083Z"/>
        </svg>

        <figcaption class="fd-illustrated-message__figcaption">
            <h3 class="fd-illustrated-message__title">Headline text goes here</h3>
            <p class="fd-illustrated-message__text">Description provides user with clarity and possible next steps.</p>
        </figcaption>

        <div class="fd-illustrated-message__actions">
            <button class="fd-button">Action</button>
        </div>
    </figure>
</div>

${localStyles}`;

Scene.parameters = {
    docs: {
        iframeHeight: 330
    },
    styles: [
        `:root {
            --sapIllus_BrandColorPrimary: var(--sapContent_Illustrative_Color1);
            --sapIllus_BrandColorSecondary: var(--sapContent_Illustrative_Color2);
            --sapIllus_AccentColor: var(--sapContent_Illustrative_Color3);
            --sapIllus_StrokeDetailColor: var(--sapContent_Illustrative_Color4);
            --sapIllus_Layering1: var(--sapContent_Illustrative_Color5);
            --sapIllus_Layering2: var(--sapContent_Illustrative_Color6);
            --sapIllus_BackgroundColor: var(--sapContent_Illustrative_Color7);
            --sapIllus_ObjectFillColor: var(--sapContent_Illustrative_Color8);
            --sapIllus_NoColor: none;
            --sapIllus_PatternShadow: url(#sapIllus_PatternShadow);
            --sapIllus_PatternHighlight: url(#sapIllus_PatternHighlight);
        }`
    ]
};

export const Dialog = () => `<div style="width: 100%; display: flex; justify-content: center">
    <figure class="fd-illustrated-message fd-illustrated-message--dialog">
        <svg class="fd-illustrated-message__illustration" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="160" height="160" viewBox="0 0 160 160" id="sapIllus-Dialog-NoMail">
            <ellipse class="sapIllus_BackgroundColor" style="fill:var(--sapIllus_BackgroundColor)" cx="80" cy="149" rx="45" ry="7"/>
            <path class="sapIllus_Layering1" style="fill:var(--sapIllus_Layering1)" d="M80.0026,24.2712a1.2576,1.2576,0,0,1-1.2373-1.2775V6.9839a1.2379,1.2379,0,1,1,2.4746,0v16.01A1.2576,1.2576,0,0,1,80.0026,24.2712Z"/>
            <path class="sapIllus_Layering1" style="fill:var(--sapIllus_Layering1)" d="M117.134,46.49a1.2518,1.2518,0,0,1-.8866-2.1368L127.36,33.259a1.2527,1.2527,0,1,1,1.773,1.77L118.0205,46.1228A1.2508,1.2508,0,0,1,117.134,46.49Z"/>
            <path class="sapIllus_Layering1" style="fill:var(--sapIllus_Layering1)" d="M42.861,46.5029a1.25,1.25,0,0,1-.8862-.3669L30.8672,35.0353A1.2528,1.2528,0,1,1,32.64,33.2641L43.7471,44.3648a1.2525,1.2525,0,0,1-.8861,2.1381Z"/>
            <path class="sapIllus_ObjectFillColor" style="fill:var(--sapIllus_ObjectFillColor)" d="M122,74.8393v50.1628A4.0146,4.0146,0,0,1,117.9688,129H42.0312A4.0146,4.0146,0,0,1,38,125.0021v-50.11a3.9879,3.9879,0,0,1,1.6866-3.2522L77.6129,44.7458a4.0584,4.0584,0,0,1,4.6827-.0046L120.307,71.5826A3.9879,3.9879,0,0,1,122,74.8393Z"/>
            <polygon class="sapIllus_Layering2" style="fill:var(--sapIllus_Layering2)" points="116.5 129 42.75 129 79.8 102 116.5 129"/>
            <path class="sapIllus_BrandColorSecondary" style="fill:var(--sapIllus_BrandColorSecondary)" d="M113.4474,78.7409,83.177,102.06c-1.3436,1.0195-4.9987,1.0283-6.3522.0214L46.7228,79.0225l31.0664-21.96a3.8068,3.8068,0,0,1,4.3789-.0057Z"/>
            <path class="sapIllus_PatternShadow" style="fill:var(--sapIllus_PatternShadow)" d="M114,79c-6.632-4.4451-13.662-9.5549-20.294-14C81.7917,73.3675,70.5761,81.5723,60,89l16.2407,13.0381a6.84,6.84,0,0,0,7.094-.06Z"/>
            <path class="sapIllus_StrokeDetailColor" style="fill:var(--sapIllus_StrokeDetailColor)" d="M120.5957,71.1737,82.584,44.3316a4.5631,4.5631,0,0,0-5.26.0053L39.3975,71.2313A4.4963,4.4963,0,0,0,37.5,74.891v50.1109A4.52,4.52,0,0,0,42.0313,129.5h75.9375a4.52,4.52,0,0,0,4.5312-4.4981V74.8387A4.4948,4.4948,0,0,0,120.5957,71.1737Zm-80.62.873L77.9019,45.1524a3.5589,3.5589,0,0,1,4.1049-.0039L120.0186,71.99a3.4837,3.4837,0,0,1,.9275,1.01c-.8526.6458-3.5746,2.7061-7.2506,5.48L81.89,56.8951,113.2722,78.8c-9.3976,7.09-24.5566,18.4831-31,23.086a5.4369,5.4369,0,0,1-5.0542,0c-6.339-4.5283-20.8951-15.775-30.1651-22.9812l30.994-22.0094L46.5847,78.54c-3.6115-2.8084-6.3432-4.9428-7.36-5.7383A3.4742,3.4742,0,0,1,39.9756,72.0467ZM42.0313,128.5A3.5188,3.5188,0,0,1,38.5,125.0019V74.891a3.46,3.46,0,0,1,.4592-1.6985l37.9016,30.9253L42.75,128.5Zm2.0852,0L76.89,104.1413l.4892.3991a4.2914,4.2914,0,0,0,2.0831.8891,1.69,1.69,0,0,0,.5664,0,4.2941,4.2941,0,0,0,2.0831-.8891l.53-.4228L115.3834,128.5ZM121.5,125.0019a3.5188,3.5188,0,0,1-3.5312,3.4981H116.75L82.6715,104.0938,121.168,73.3981a3.4537,3.4537,0,0,1,.332,1.4406Z"/>
        </svg>


        <figcaption class="fd-illustrated-message__figcaption">
            <h3 class="fd-illustrated-message__title">Headline text goes here</h3>
            <p class="fd-illustrated-message__text">Description provides user with clarity and possible next steps.</p>
        </figcaption>

        <div class="fd-illustrated-message__actions">
            <button class="fd-button">Action</button>
        </div>
    </figure>
</div>
`;

Dialog.parameters = {
    docs: {
        iframeHeight: 330,
        description: {
            story: `Add \`.fd-illustrated-message--dialog\` class
        `
        }
    }
};

export const Spot = () => `<div style="width: 100%; display: flex; justify-content: center">
    <figure class="fd-illustrated-message fd-illustrated-message--spot">
        <svg class="fd-illustrated-message__illustration" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="128" height="128" viewBox="0 0 128 128" id="sapIllus-Spot-NoMail">
            <path class="sapIllus_ObjectFillColor" style="fill:var(--sapIllus_ObjectFillColor)" d="M97.2067,60.8347v40.18a3,3,0,0,1-3,3H33.9947a3,3,0,0,1-3-3V60.8765a3,3,0,0,1,1.254-2.44L62.321,36.9154a3,3,0,0,1,3.487-.0035l30.14,21.48A3,3,0,0,1,97.2067,60.8347Z"/>
            <polygon class="sapIllus_Layering2" style="fill:var(--sapIllus_Layering2)" points="92.761 103.489 35.468 103.489 64.096 82.677 92.761 103.489"/>
            <path class="sapIllus_BrandColorSecondary" style="fill:var(--sapIllus_BrandColorSecondary)" d="M90.367,64.3134,65.917,82.8827a3.0257,3.0257,0,0,1-3.6308.0171L37.626,64.5377l24.716-17.487a3.0264,3.0264,0,0,1,3.4838-.0046Z"/>
            <path class="sapIllus_PatternShadow" style="fill:var(--sapIllus_PatternShadow)" d="M90.5326,64.1056,74.8393,53.3121l-26.5862,19.16L61.852,82.481a4,4,0,0,0,4.8068-.0486Z"/>
            <path class="sapIllus_Layering1" style="fill:var(--sapIllus_Layering1)" d="M63.7051,23.52a1.0169,1.0169,0,0,1-1-1.0334V9.5356a1.0005,1.0005,0,1,1,2,0V22.4867A1.0169,1.0169,0,0,1,63.7051,23.52Z"/>
            <path class="sapIllus_Layering1" style="fill:var(--sapIllus_Layering1)" d="M93.7146,41.4936a1.0127,1.0127,0,0,1-.7165-1.7286l8.9808-8.9742a1.0129,1.0129,0,1,1,1.433,1.4319l-8.9808,8.9742A1.0105,1.0105,0,0,1,93.7146,41.4936Z"/>
            <path class="sapIllus_Layering1" style="fill:var(--sapIllus_Layering1)" d="M33.6873,41.5044a1.01,1.01,0,0,1-.7162-.2968l-8.9771-8.98a1.013,1.013,0,1,1,1.4324-1.4329l8.9771,8.98a1.0132,1.0132,0,0,1-.7162,1.73Z"/>
            <path class="sapIllus_StrokeDetailColor" style="fill:var(--sapIllus_StrokeDetailColor)" d="M96.2422,57.7315,66.1948,36.142a3.4676,3.4676,0,0,0-4.0559.0039l-29.98,21.6317A3.5346,3.5346,0,0,0,30.7,60.6384v40.3442a3.5,3.5,0,0,0,3.2612,3.4947l-.0321.0232.2469-.0013.0133.0013H94.2172a3.5079,3.5079,0,0,0,3.4892-3.5179V60.5966A3.5329,3.5329,0,0,0,96.2422,57.7315Zm-63.506.866,29.98-21.6337a2.4774,2.4774,0,0,1,2.8973-.003L95.6608,58.5523a2.49,2.49,0,0,1,.6548.7262l-4.9722,3.6834q-.5681.38-1.1359.7607L65.6853,46.9533l23.918,17.1739L65.8584,80.0282a3.33,3.33,0,0,1-3.2087.13L38.61,64.0228,62.5492,46.9171,38.2518,63.7824l-1.96-1.3153-4.22-3.1264A2.4893,2.4893,0,0,1,32.7362,58.5975Zm63.97,42.3914a2.5054,2.5054,0,0,1-2.4923,2.513H92.8174l-27.74-20.09,26.6776,20.09H36.3728L63.0443,83.4555,35.3109,103.5019H34.1868a2.5054,2.5054,0,0,1-2.4923-2.513V60.6408a2.4906,2.4906,0,0,1,.0367-.3075L62.0678,82.8075a3.4809,3.4809,0,0,0,4.167,0L96.6663,60.2637a2.49,2.49,0,0,1,.04.3354Z"/>
        </svg>

        <figcaption class="fd-illustrated-message__figcaption">
            <h3 class="fd-illustrated-message__title">Headline text goes here</h3>
            <p class="fd-illustrated-message__text">Description provides user with clarity and possible next steps.</p>
        </figcaption>

        <div class="fd-illustrated-message__actions">
            <button class="fd-button">Action</button>
        </div>
    </figure>
</div>
`;

Spot.parameters = {
    docs: {
        iframeHeight: 330,
        description: {
            story: `Add \`.fd-illustrated-message--spot\` class
        `
        }
    }
};
