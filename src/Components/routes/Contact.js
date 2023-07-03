import Img from '../../assets/Servise.png'
import ConsultatImg from "../../assets/manpng.png"
import './Contact'

function Contact() {
    return (
        <>
            <div style={{ paddingBottom: '50px', marginTop: '100px ' }}>
                <img src={Img} alt='1' />
            </div>
            <div className="text" style={{ paddingBottom: '40px' }}>
                <h1><b> РАБОТАЕМ ВО ВСЕХ РАЙОНАХ ТАШКЕНТА И ПО ВСЕМУ УЗБЕКИСТАНУ</b></h1>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', columnGap: '40px', width: '80%', margin: '0 auto' }} className='text-menu '>
                <h4>Алмазарский район</h4>
                <h4>Бектемирский </h4>
                <h4>Мирабадский</h4>
                <h4>Мирзо-Улугбекский</h4>
                <h4>Сергелийский</h4>
                <h4>Чиланзарский</h4>
                <h4>Шайхантаурский</h4>
                <h4>Юнусабадский</h4>
                <h4>Яккасарайский</h4>
                <h4>Яшнабадский</h4>
                <h4>Учтепинский</h4>
            </div>
        

                <section id="form-sec" data-vc-full-width="true" data-vc-full-width-init="false" class="vc_section vc_custom_1684921126834 vc_section-has-fill"><div class="vc_row wpb_row row top-row"><div class="vc_column_container col-md-6"><div class="wpb_wrapper vc_column-inner"><h2 class="vc_custom_heading c-section-title align-left">Заполните форму ниже, чтобы вызвать нашего квалифицированного ремонтника прямо к вам домой.</h2>
                <div class="wpb_text_column wpb_content_element  text-desc" >
                    <div class="wpb_wrapper">
                        <p>Пожалуйста, предоставьте нам необходимую информацию, чтобы мы могли связаться с вами и организовать визит нашего специалиста</p>

                    </div>
                </div>
            </div></div><div class="vc_column_container col-md-1"><div class="wpb_wrapper vc_column-inner"></div></div><div class="vc_column_container col-md-5"><div class="wpb_wrapper vc_column-inner">
                <div class="wpcf7 no-js" id="wpcf7-f8-p11-o1" lang="ru-RU" dir="ltr">
                    <div class="screen-reader-response"><p role="status" aria-live="polite" aria-atomic="true"></p> <ul></ul></div>
                    <form action="/?utm_source=google&#038;utm_medium=cpc&#038;utm_campaign=Remo&#038;utm_term=%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82+%D1%85%D0%BE%D0%BB%D0%BE%D0%B4%D0%B8%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2+%D0%B2+%D1%82%D0%B0%D1%88%D0%BA%D0%B5%D0%BD%D1%82%D0%B5&#038;utm_gdr=%7Bgender%7D&#038;utm_age=%7Bage%7D&#038;utm_device=%7Bdevice_type%7D&#038;gclid=EAIaIQobChMIjMra_ZDq_wIVgopoCR0PWgHIEAMYASAAEgLLn_D_BwE#wpcf7-f8-p11-o1" method="post" class="wpcf7-form init" aria-label="Контактная форма" novalidate="novalidate" data-status="init">
                        <div class="form-input">
                            <p><span class="wpcf7-form-control-wrap" data-name="text-315"><input size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Имя" value="" type="text" name="text-315" /></span>
                            </p>
                        </div>
                        <div class="form-input">
                            <p><span class="wpcf7-form-control-wrap mask-151"><input type="tel" value="" name="mask-151" class="wpcf7-form-control wpcf7mf-mask wpcf7-mask wpcf7-validates-as-required" size="40" aria-required="1" aria-invalid="" placeholder="Телефон" data-mask="+998 (__) ___-__-__" /></span>
                            </p>
                        </div>
                        <div class="form-submit">
                            <p><input class="wpcf7-form-control has-spinner wpcf7-submit" type="submit" value="Отправить" />
                            </p>
                        </div>
                        <p><input type="hidden" name="wpcf7tg_sending" value="1" />
                        </p><div class="wpcf7-response-output" aria-hidden="true"></div>
                    </form>
                </div>
            </div></div></div></section>
        </>
    )
}


export default Contact;