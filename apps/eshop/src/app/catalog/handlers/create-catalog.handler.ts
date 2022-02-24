import { Logger } from "@nestjs/common";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { CreateCatalogCommand } from "../commands/create-catalog.command";

@CommandHandler(CreateCatalogCommand)
export class CreateCatalogHandler
    implements ICommandHandler<CreateCatalogCommand> {
    private readonly logger = new Logger(CreateCatalogHandler.name);

    async execute(command: CreateCatalogCommand) {
        this.logger.log(`CatalogName: ${command.catalogName} | Price: ${command.price}`);
        return true;
    }
}