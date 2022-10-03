export const copyToClipboard = (target, color) => {
    navigator.clipboard.writeText(color);
    const tooltip = document.getElementsByClassName('tooltip-inner')
    tooltip[0].innerHTML = 'Copied!'

}

export const enableHash = (target) => {
    const hash = target.children[0]

    if(hash) hash.classList.remove('d-none')

}

export const handleOnMouseLeave = (target) => {
    const attr = target.attributes['data-bs-original-title']
    if(attr) attr.value = 'Copy to clipboard';
    const hash = target.children[0]
    hash.classList.add('d-none')
}