javascript:(function()%7Bfunction%20poll4elems(a)%7Bif(!window.optimizely%7C%7C%22function%22!%3Dtypeof%20window.optimizely.get%7C%7C%22object%22!%3Dtypeof%20window.optimizely.activeExperiments%26%26!window.optimizely.get(%22state%22).getVariationMap())%7Bif(start%7C%7C(start%3Da)%2C!(a-start%3C4e3))return%20void%20console.log(%22Optimizely%20NOT%20running%20on%20this%20page%20-%20aborting%20widget%20...%20%22)%3BrequestAnimationFrame(poll4elems)%7Delse%20optimizelyWidget()%7Dfunction%20optimizelyWidget()%7Bvar%20a%3D'%3Cdiv%3E%3Cinput%20type%3D%22text%22%20style%3D%22margin%3A0%3Bpadding%3A2px%200%3Bwidth%3A%20auto%3B%22%20placeholder%3D%22cookie%20name%22%20id%3D%22cname_yuli%22%20value%3D%22xx_qa%22%20%2F%3E%3Cbutton%20onclick%3D%22setCookie(0.5)%22%20style%3D%22color%20%3A%20%23888%3Bmargin%20%3A%200%3B%20border%20%3A%201px%20solid%20%23555%3Bbackground%20%3A%20%230f0%3B%22%3ESet%3C%2Fbutton%3E%3Cbutton%20onclick%3D%22setCookie(-1)%22%20style%3D%22color%20%3A%20%23fff%3B%20border%20%3A%201px%20solid%20%23555%3Bbackground%20%3A%20%23f00%3B%22%3ERemove%3C%2Fbutton%3E%3C%2Fdiv%3E%3Cdiv%20id%3D%22cerror%22%20style%3D%22color%20%3A%20%23fff%3B%20background%20%3A%20%23f00%3B%22%3E%3C%2Fdiv%3E%3Cdiv%3E%3Cinput%20style%3D%22margin%3A0%3Bpadding%3A2px%200%3Bwidth%3A%20auto%3B%22%20type%3D%22text%22%20placeholder%3D%22variationId%22%20id%3D%22variationId_yuli%22%20value%3D%22%22%20%2F%3E%3Cbutton%20onclick%3D%22setExperiment(document.getElementById(%5C'variationId_yuli%5C').value)%22%20style%3D%22color%20%3A%20%23888%3B%20border%20%3A%201px%20solid%20%23555%3Bbackground%20%3A%20%230f0%3Bmargin%20%3A%200%22%3EForce%20Experiment%3C%2Fbutton%3E%3C%2Fdiv%3E%3Cspan%20style%3D%22padding%20%3A%205px%208px%3B%20position%20%3A%20absolute%3B%20top%20%3A%200%3B%20right%20%3A%200%3B%20color%20%3A%20%23f00%3B%20background%20%3A%20rgba(235%2C28%2C36%2C0.4)%3Bcursor%20%3A%20pointer%3B%22%20onclick%3D%22removeThis()%22%3E%20X%20%3C%2Fspan%3E%3Cdiv%20id%3D%22optimizely_info_data%22%20style%3D%22margin%3A%202px%200%200%3Bpadding%20%3A%205px%3Bborder%20%3A%201px%20solid%20%23555%3Bborder-radius%20%3A%203px%3B%22%3E%3C%2Fdiv%3E'%2Cb%3Ddocument.body%3Bwindow.setCookie%3Dfunction(a)%7Bvar%20b%3Dnew%20Date%2Cc%3Ddocument.getElementById(%22cname_yuli%22)%2Cd%3Ddocument.getElementById(%22cerror%22)%3Bif(c%26%26c.value)%7Bb.setTime(b.getTime()%2B24*a*60*60*1e3)%3Bvar%20e%3D%22expires%3D%22%2Bb.toUTCString()%3Bdocument.cookie%3Dc.value%2B%22%3D1%3Bpath%3D%2F%3Bdomain%3D%22%2Bdomain%2B%22%3B%22%2Be%2Cd.innerHTML%3D%22Cookie%20has%20been%20Set!%22%2C%22-1%22%3D%3Da%26%26(document.cookie%3D%22optimizelySegments%3D0%3Bpath%3D%2F%3Bdomain%3D%22%2Bdomain%2B%22%3Bexpires%3DThu%2C%2018%20Dec%202013%2012%3A00%3A00%20UTC%3B%22%2Cdocument.cookie%3D%22optimizelyBuckets%3D0%3Bpath%3D%2F%3Bdomain%3D%22%2Bdomain%2B%22%3Bexpires%3DThu%2C%2018%20Dec%202013%2012%3A00%3A00%20UTC%3B%22%2Cdocument.cookie%3D%22optimizelyEndUserId%3D0%3Bpath%3D%2F%3Bdomain%3D%22%2Bdomain%2B%22%3Bexpires%3DThu%2C%2018%20Dec%202013%2012%3A00%3A00%20UTC%3B%22%2Cdocument.cookie%3D%22optimizelySegments%3D0%3Bpath%3D%2F%3Bdomain%3D%22%2Bdomain%2B%22%3Bexpires%3DThu%2C%2018%20Dec%202013%2012%3A00%3A00%20UTC%3B%22%2Cdocument.cookie%3D%22optimizelyPendingLogEvents%3D0%3Bpath%3D%2F%3Bdomain%3D%22%2Bdomain%2B%22%3Bexpires%3DThu%2C%2018%20Dec%202013%2012%3A00%3A00%20UTC%3B%22%2Cwindow.localStorage.clear()%2Cwindow.sessionStorage.clear())%7Delse%20d.innerHTML%3D%22You%20need%20to%20specify%20a%20name%20for%20the%20cookie%22%3BsetTimeout(function()%7Bd.innerHTML%3D%22%22%7D%2C1e3)%7D%2Cwindow.removeThis%3Dfunction()%7Bb.removeChild(document.getElementById(%22ccontainer_yuli%22))%7D%2Cwindow.setExperiment%3Dfunction(a)%7Bwindow.location.search%3D%22optimizely_x%3D%22%2Ba%2B%22%26optimizely_token%3DPUBLIC%22%7D%3Bvar%20c%3D%22position%20%3A%20fixed%3B%20z-index%20%3A%20999%3B%20top%20%3A%2010px%3B%20left%20%3A%2010px%3B%20padding%20%3A%2025px%3B%20background%20%3A%20rgb(238%2C%20241%2C%20255)%3B%20border%20%3A%201px%20solid%20%23aaa%3B%20border-radius%20%3A%203px%3B%20box-shadow%20%3A%200%200%205px%20%23555%3B%20-moz-box-shadow%20%3A%200%200%205px%20%23555%3B%20-webkit-box-shadow%20%3A%200%200%205px%20%23555%3B%22%2Cd%3Ddocument.createElement(%22div%22)%3Bd.id%3D%22ccontainer_yuli%22%2Cd.style%3Dc%2Cd.innerHTML%3Da%2Cb.appendChild(d)%2Cdocument.querySelector(%22%23ccontainer_yuli%22).setAttribute(%22style%22%2Cc)%3Bvar%20e%3D%7B%7D%2Cf%3D%5B%5D%3Bwindow.optimizely%26%26window.optimizely.variationNamesMap%26%26optimizely.activeExperiments.length%26%26(Object.assign(e%2Coptimizely.variationNamesMap)%2Cf%3Df.concat(optimizely.activeExperiments))%2Cwindow.optimizely%26%26window.optimizely.get(%22state%22).getVariationMap()%26%26Object.getOwnPropertyNames(window.optimizely.get(%22state%22).getVariationMap()).length%26%26(Object.assign(e%2Cwindow.optimizely.get(%22state%22).getVariationMap())%2Cf%3Df.concat(optimizely.get(%22state%22).getActiveExperimentIds()))%2Cf.length%3Ff.forEach(function(a%2Cb)%7Bvar%20c%3Ddocument.createElement(%22div%22)%2Cd%3De%5Ba%5D.name%3Fe%5Ba%5D.name%3Ae%5Ba%5D%3Bc.style%3D%22margin%20%3A%200%3Bpadding%20%3A%205px%200%3B%22%2Cc.innerHTML%3D'Id%3A%20%3Cspan%20id%3D%22test_id%22%3E'%2Ba%2B'%3C%2Fspan%3E%2C%20v%3A%20%3Cspan%20id%3D%22test_name%22%3E'%2Bd%2B'%3C%2Fspan%3E%2C%20rv%3A%3Cspan%20id%3D%22test_version%22%3E'%2B(optimizely.get(%22data%22).revision%7C%7Coptimizely.revision)%2B%22%3C%2Fspan%3E%22%2C%22string%22%3D%3Dtypeof%20d%26%26document.querySelector(%22%23optimizely_info_data%22).appendChild(c)%7D)%3Adocument.querySelector(%22%23optimizely_info_data%22).innerHTML%3D%22No%20experiment%20running!%22%7Dvar%20start%3D0%2Cdomain%3Ddocument.domain.split(%22.%22).length%3E2%3Fdocument.domain.split(%22.%22)%5Bdocument.domain.split(%22.%22).length-2%5D%2B%22.%22%2Bdocument.domain.split(%22.%22)%5Bdocument.domain.split(%22.%22).length-1%5D%3Adocument.domain%3BrequestAnimationFrame(poll4elems)%7D)()