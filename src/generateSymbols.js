import { Page, SymbolMaster, Rectangle, ShapePath } from 'sketch'
import { originForNewArtboardWithSize, createMapOfTokensToSharedStyles, syncAllStyleInstances } from './utils';

// Experimental //
export default function createSymbol(document) {

    // TODO: create this if it doesn't exist
    let symbolsPage = Page.getSymbolsPage(document)
    if (symbolsPage == null) {
        symbolsPage = Page.createSymbolsPage()
        symbolsPage.parent = document
    }

    const point = originForNewArtboardWithSize(symbolsPage, 100, 100)

    const symbolMaster = new SymbolMaster({
        name: 'Sizes / Spacing / 400 / 4x / Four X',
        parent: symbolsPage,
        frame: new Rectangle(point.x, point.y, 100, 100)
    })

    const tokenIdMap = createMapOfTokensToSharedStyles()

    const shapePath = new ShapePath({
        name: 'cdr-name',
        shapeType: ShapePath.ShapeType.Rectangle,
        parent: symbolMaster,
        frame: new Rectangle(0, 0, 100, 100),
        sharedStyleId: tokenIdMap['cdr-space-eighth-x'],
    })

    syncAllStyleInstances(document.getSharedLayerStyleWithID(tokenIdMap['cdr-space-eighth-x']))

}