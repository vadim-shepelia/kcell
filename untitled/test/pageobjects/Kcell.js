require('assert');
require('chai').expect;
require('mocha');

describe('Kcell footer ',() => {
    it('FooterEng = Reward procedure for return of found property' , () =>{
        browser.url('https://www.safemobile.activ.kz');
        let document = $(`[data-elem-id="1591906532527"] a`);
       let b = document.getAttribute('href');
        expect(b).to.be("https://www.safemobile.activ.kz/doc/Description%20of%20the%20procedure%20for%20providing_ru.pdf");
    });
    it('FooterEng = Terms of transfer of found property', () =>{
        browser.url('https://www.safemobile.activ.kz');
        let document = $(`[data-elem-id="1591907530905"] a`);
        let b = document.getAttribute('href');
        expect(b).to.eql("https://www.safemobile.activ.kz/doc/ACCEPTANCE%20HANDOVER%20CERTIFICATE%20for%20the%20found%20device_eng.pdf");
    });

    it('FooterEng = Instruction for financial reward', () =>{
        browser.url('https://www.safemobile.activ.kz');
        let document = $(`[data-elem-id="1591907668598"] a`);
        let b = document.getAttribute('href');
        expect(b).to.eql("https://www.safemobile.activ.kz/doc/Instructions%20for%20receiving%20cash%20reward_eng.pdf");
    });

    it('FooterEng = Privacy policy', () =>{
        browser.url('https://www.safemobile.activ.kz');
        let document = $(`[data-elem-id="1591907498844"] a`);
        let b = document.getAttribute('href');
        expect(b).to.eql("https://www.safemobile.activ.kz/doc/Privacy%20Policy_eng.pdf");
    });

    it('FooterEng = Service agreement', () =>{
        browser.url('https://www.safemobile.activ.kz');
        let document = $(`[data-elem-id="1591907717807"] a`);
        let b = document.getAttribute('href');
        expect(b).to.eql("https://www.safemobile.activ.kz/doc/Protect%20Your%20Mobile%20Device%20–%20Service%20Agreement_eng.pdf");
    });

    it('FooterEng = F.A.Q.', () =>{
        browser.url('https://www.safemobile.activ.kz');
        let document = $(`[data-elem-id="1591907685914"] a`);
        let b = document.getAttribute('href');
        expect(b).to.eql("https://www.safemobile.activ.kz/doc/FAQ_eng.pdf");
    });

    it('FooterEng = About company', () =>{
        browser.url('https://www.safemobile.activ.kz');
        let document = $(`[data-elem-id="1606904030639"] a`);
        let b = document.getAttribute('href');
        expect(b).to.eql("https://www.kcell.kz/en/article/about");
    });

    it('FooterEng = Policies', () =>{
        browser.url('https://www.safemobile.activ.kz');
        let document = $(`[data-elem-id="1608905109381"] a`);
        let b = document.getAttribute('href');
        expect(b).to.eql("https://www.kcell.kz/en/article/policies");
    });

    it('FooterEng = News', () =>{
        browser.url('https://www.safemobile.activ.kz');
        let document = $(`[data-elem-id="1606904030645"] a`);
        let b = document.getAttribute('href');
        expect(b).to.eql("https://www.kcell.kz/en/news/index/2474");
    });

    it('FooterEng = Kcell shops', () =>{
        browser.url('https://www.safemobile.activ.kz');
        let document = $(`[data-elem-id="1606904132222"] a`);
        let b = document.getAttribute('href');
        expect(b).to.eql("https://beta.kcell.kz/shop/");
    });
})