# GPUs

~~买一个RTX GPU，我想看到人们慢慢意识到他们在High Sierra甚至没有支持的时候受苦。让Nvidia的粉丝慢慢痛苦地死去，让这成为一个提醒，永远不要冒犯我们的主和救世主蒂姆·苹果~~
如果你不想头疼，请远离所有非基于开普勒的Nvidia gpu。目前(很可能是永远)，图灵和Volta gpu在任何版本的macOS中都没有任何支持，而Pascal和Maxwell的支持在High Sierra中停止，同时也需要网络驱动，所以它们不是原生gpu(这很重要，因为这意味着另一个故障点)。

> 但。。但。。但是驱动程序们出来了吗?

![Web 驱动](WebDrivers.gif)

GPU我们建议,看看 [显卡购买指南](https://sumingyd.github.io/GPU-Buyers-Guide/)
对于那些运行不受支持的gpu的人，你仍然有希望!有了我们正在申请的专利 [**macOS中禁用不支持的显卡指南**](https://sumingyd.github.io/Getting-Started-With-ACPI/Desktops/desktop-disable.html)，即使是像你这样的傻瓜也可以体验Mojave的荣耀和超越!

> 在购买GPU的时候，有什么GPU品牌是我应该避免的吗?

为什么我很高兴你问这个问题，大多数制造商实际上在hackintosh上有很好的记录，但有两个特定的品牌需要避免。虽然可以安装这些gpu，但仍然有很高的可能性出现不稳定和黑屏等问题:

* XFX(可能在CSM/legacy模式关闭的情况下工作，确保它在UEFI模式下)
* PowerColor
* MSI(特别是Navi, Vega和Polaris都可以)

注意:AMD的Navi支持仍然是相当挑剔的，因为WhateverGreen还没有更新

::: tip 推荐

所以我们对gpu的总体建议是:

* 更新的AMD gpu:
  * Polaris 10 和 20(RX 4XX, 5XX)
  * Vega 10 和 20(RX Vega 56, 64 and VII)
  * Navi 10(RX 5XXX)
* 整体品牌推荐:
  * 蓝宝石
  * 华硕
  * 技嘉
:::

**不被支持的显卡**

Ampere

* RTX 3090
* RTX 3080
* RTX 3070

Turing

* Titan RTX
* RTX 2080 Ti
* RTX 2080 Super
* RTX 2080
* RTX 2070 Super
* RTX 2070
* RTX 2060 Super
* RTX 2060
* GTX 1660 Ti
* GTX 1660
* GTX 1650

* Quadro RTX 8000
* Quadro RTX 6000
* Quadro RTX 5000
* Quadro RTX 4000

Volta

* Titan V
* Titan V CEO Edition

* Quadro GV100

Lexa

* RX 540/X
* RX 550/X

**避免使用的显卡**

Pascal

* GTX Titan X(GP 102-400 Pascal core)
* GTX Titan Xp(GP 102-450 Pascal core)
* GTX 1080/Ti
* GTX 1070/Ti
* GTX 1060
* GTX 1050/Ti
* GT 1030

* Quadro P400
* Quadro P600
* Quadro P620
* Quadro P1000
* Quadro P2000
* Quadro P4000
* Quadro P5000
* Quadro P6000
* Quadro GP100

Maxwell

* GTX Titan X(GM 200 Maxwell core)
* GTX 980/ti
* GTX 970
* GTX 960
* GTX 950
* GTX 750/ti
* GTX 745

* Quadro K620
* Quadro K1200
* Quadro K220
* Quadro M2000
* Quadro M4000
* Quadro M5000
* Quadro M6000
