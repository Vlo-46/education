import React from 'react'
import styles from './blog_detail.module.css'
import {
    FacebookIcon,
    FacebookShareButton,
    TelegramIcon,
    TelegramShareButton,
    MailruShareButton,
    MailruIcon,
    WhatsappShareButton,
    WhatsappIcon
} from 'react-share'

const BlogShare = () => {
    let title = 'title'
    let url = String(window.location)
    return (
        <div className={`border-top border-bottom ${styles.shareField} pt-3 pb-3`}>
            <h5>Կիսվել:</h5>
            <div>
                <FacebookShareButton url={url}
                                     title={title}
                >
                    <FacebookIcon size={32} round={true}/>
                </FacebookShareButton>
                <TelegramShareButton url={url}
                                     title={title}
                >
                    <TelegramIcon size={32} round={true}/>
                </TelegramShareButton>
                <MailruShareButton url={url}
                                   title={title}>
                    <MailruIcon size={32} round={true}/>
                </MailruShareButton>
                <WhatsappShareButton url={url}
                                     title={title}>
                    <WhatsappIcon size={32} round={true}/>
                </WhatsappShareButton>
            </div>
        </div>
    )
}

export default BlogShare