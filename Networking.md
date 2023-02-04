# 网卡

本节专门针对专用的网卡，通常大多数网络都是本地支持的，比如使用aquana，或者使用Mieze提供的驱动:

* [IntelMausiEthernet.kext](https://github.com/Mieze/IntelMausiEthernet)
  * 适用于大多数英特尔控制器
* [SmallTree-I211-AT-patch](https://github.com/khronokernel/SmallTree-I211-AT-patch/releases)
  * 用于通常在AMD主板上发现的I211-AT
* [AtherosE2200Ethernet.kext](https://github.com/Mieze/AtherosE2200Ethernet)
  * 适用于大多数Atheros控制器
* [RealtekRTL8111](https://github.com/Mieze/RTL8111_driver_for_OS_X)
  * 用于Realtek的千兆以太网
* [LucyRTL8125Ethernet](https://github.com/Mieze/LucyRTL8125Ethernet)
  * 用于Realtek的2.5Gb以太网

某些消费网卡不支持，例如:

* Realtek L8200A(仅在华硕主板上发现)
* Intel I225-V

对于i225-V，您实际上可以将其伪装为官方支持的i225LM:[示例](https://sumingyd.github.io/OpenCore-Install-Guide/config.plist/comet-lake.html#deviceproperties)

当涉及板载服务器网卡或专用硬件(如Mellanox的MNPA19-XTR 10Gbe网卡)时，问题就出现了。你需要保持警惕，看看制造商或黑苹果社区是否已经开发了驱动程序，或者相反，你可以采取安全的路线，并获取10Gbe aqua AQtion ac -107 NIC，因为这些是在imacpro1,1, Macmini8,1和macpro7,1中发货的，因此完全原生支持。请注意[某些品牌需要打补丁](https://www.insanelymac.com/forum/topic/330614-aquantia-10-gb-ethernet-support-thread-10132-upwards/)

[SmallTree](https://www.small-tree.com/categories/10gb-ethernet-cards/) 是另一个受欢迎的选择

**需要避免使用的网卡**

* 英特尔服务器网卡(包括1Gbe和10Gbe，[有X520和X540网卡的解决方案](https://www.tonymacx86.com/threads/how-to-build-your-own-imac-pro-successful-build-extended-guide.229353/)
* HP服务器网卡(包括1Gbe和10Gbe，通常更名为Qlogic)
* 戴尔服务器网卡(包括1Gbe和10Gbe，通常更名为博通或英特尔)
* Mellanox 网卡
